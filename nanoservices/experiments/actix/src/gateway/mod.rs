use rumqttc::{AsyncClient, Event, MqttOptions, Packet, QoS, Transport};
use dal::telemetry::schema::TelemetryEvent;
use std::{collections::{HashSet, VecDeque}, env, sync::{Arc, Mutex}, time::Duration};
use tokio::{sync::{broadcast, mpsc}, task::JoinHandle};

pub mod websocket;

const INGESTION_CAPACITY: usize = 512;
const FANOUT_CAPACITY: usize = 256;
const DEDUPLICATION_CAPACITY: usize = 4096;
const DEFAULT_RECONNECT_DELAY_MS: u64 = 500;
const DEFAULT_MAX_RECONNECT_DELAY_MS: u64 = 30_000;

#[derive(Clone, Debug)]
pub struct GatewayConfig {
    pub broker_url: String,
    pub client_id: String,
    pub username: Option<String>,
    pub password: Option<String>,
    pub ca_cert_path: Option<String>,
    pub client_cert_path: Option<String>,
    pub client_key_path: Option<String>,
    pub topic_prefix: String,
    pub qos: QoS,
    pub reconnect_delay: Duration,
    pub max_reconnect_delay: Duration,
}

impl GatewayConfig {
    pub fn from_env() -> Result<Self, String> {
        let qos = match env::var("MQTT_QOS").unwrap_or_else(|_| "1".into()).as_str() {
            "0" => QoS::AtMostOnce,
            "1" => QoS::AtLeastOnce,
            "2" => QoS::ExactlyOnce,
            value => return Err(format!("MQTT_QOS must be 0, 1, or 2, got {value}")),
        };
        let reconnect_delay = env::var("MQTT_RECONNECT_DELAY_MS")
            .ok().and_then(|value| value.parse().ok()).unwrap_or(DEFAULT_RECONNECT_DELAY_MS);
        let max_reconnect_delay = env::var("MQTT_MAX_RECONNECT_DELAY_MS")
            .ok().and_then(|value| value.parse().ok()).unwrap_or(DEFAULT_MAX_RECONNECT_DELAY_MS);
        if reconnect_delay == 0 || max_reconnect_delay < reconnect_delay {
            return Err("MQTT reconnect delays must be positive and max must be >= initial".into());
        }
        Ok(Self {
            broker_url: env::var("MQTT_BROKER_URL").unwrap_or_else(|_| "mqtt://127.0.0.1:1883".into()),
            client_id: env::var("MQTT_CLIENT_ID").unwrap_or_else(|_| "blazecore-experiments".into()),
            username: env::var("MQTT_USERNAME").ok(),
            password: env::var("MQTT_PASSWORD").ok(),
            ca_cert_path: env::var("MQTT_CA_CERT_PATH").ok(),
            client_cert_path: env::var("MQTT_CLIENT_CERT_PATH").ok(),
            client_key_path: env::var("MQTT_CLIENT_KEY_PATH").ok(),
            topic_prefix: env::var("MQTT_TOPIC_PREFIX").unwrap_or_else(|_| "daq".into()),
            qos,
            reconnect_delay: Duration::from_millis(reconnect_delay),
            max_reconnect_delay: Duration::from_millis(max_reconnect_delay),
        })
    }

    fn topic_filter(&self) -> String {
        format!("{}/+/telemetry", self.topic_prefix.trim_end_matches('/'))
    }
}

pub use dal::telemetry::schema::TelemetryEvent as GatewayTelemetryEvent;

#[derive(Clone)]
pub struct GatewayState {
    sender: broadcast::Sender<TelemetryEvent>,
    seen_events: Arc<Mutex<DeduplicationCache>>,
}

impl GatewayState {
    pub fn new() -> Self {
        let (sender, _) = broadcast::channel(FANOUT_CAPACITY);
        Self { sender, seen_events: Arc::new(Mutex::new(DeduplicationCache::default())) }
    }

    pub fn subscribe(&self) -> broadcast::Receiver<TelemetryEvent> {
        self.sender.subscribe()
    }

    fn publish(&self, event: TelemetryEvent) {
        let key = event.event_id.clone().or_else(|| {
            Some(format!("{}:{}", event.device_id.as_deref().unwrap_or("unknown"), event.sequence?))
        });
        let Some(key) = key else { return };
        let Ok(mut cache) = self.seen_events.lock() else { return };
        if !cache.insert(key) { return; }
        drop(cache);
        let _ = self.sender.send(event);
    }
}

#[derive(Default)]
struct DeduplicationCache {
    keys: HashSet<String>,
    order: VecDeque<String>,
}

impl DeduplicationCache {
    fn insert(&mut self, key: String) -> bool {
        if !self.keys.insert(key.clone()) { return false; }
        self.order.push_back(key);
        if self.order.len() > DEDUPLICATION_CAPACITY {
            if let Some(oldest) = self.order.pop_front() { self.keys.remove(&oldest); }
        }
        true
    }
}

struct InboundTelemetry {
    topic: String,
    payload: Vec<u8>,
}

pub fn start(config: GatewayConfig, state: GatewayState) -> JoinHandle<()> {
    let (ingestion_tx, ingestion_rx) = mpsc::channel(INGESTION_CAPACITY);
    let mqtt_task = tokio::spawn(run_mqtt(config, ingestion_tx));
    tokio::spawn(process_ingestion(ingestion_rx, state, mqtt_task))
}

async fn process_ingestion(
    mut receiver: mpsc::Receiver<InboundTelemetry>,
    state: GatewayState,
    _mqtt_task: JoinHandle<()>,
) {
    while let Some(inbound) = receiver.recv().await {
        let Ok(mut event) = serde_json::from_slice::<TelemetryEvent>(&inbound.payload) else { continue; };
        event.source_topic = Some(inbound.topic);
        if event.measurements.values().all(|value| value.is_finite()) {
            state.publish(event);
        }
    }
}

async fn run_mqtt(config: GatewayConfig, sender: mpsc::Sender<InboundTelemetry>) {
    let mut delay = config.reconnect_delay;
    loop {
        match connect_and_poll(&config, &sender).await {
            Ok(()) => delay = config.reconnect_delay,
            Err(error) => {
                eprintln!("MQTT gateway disconnected: {error}; retrying in {:?}", delay);
                tokio::time::sleep(delay).await;
                delay = std::cmp::min(delay.saturating_mul(2), config.max_reconnect_delay);
            }
        }
    }
}

async fn connect_and_poll(config: &GatewayConfig, sender: &mpsc::Sender<InboundTelemetry>) -> Result<(), String> {
    let broker_url = with_client_id(&config.broker_url, &config.client_id);
    let mut options = MqttOptions::parse_url(broker_url)
        .map_err(|error| format!("invalid MQTT broker URL: {error}"))?;
    if let (Some(username), Some(password)) = (&config.username, &config.password) {
        options.set_credentials(username, password);
    }
    if config.ca_cert_path.is_some() || config.client_cert_path.is_some() || config.client_key_path.is_some() {
        let ca = config.ca_cert_path.as_ref().map(std::fs::read).transpose()
            .map_err(|error| format!("failed to read MQTT CA certificate: {error}"))?
            .unwrap_or_default();
        let client_auth = match (&config.client_cert_path, &config.client_key_path) {
            (Some(cert), Some(key)) => Some((
                std::fs::read(cert).map_err(|error| format!("failed to read MQTT client certificate: {error}"))?,
                std::fs::read(key).map_err(|error| format!("failed to read MQTT client key: {error}"))?,
            )),
            (None, None) => None,
            _ => return Err("MQTT_CLIENT_CERT_PATH and MQTT_CLIENT_KEY_PATH must be configured together".into()),
        };
        let transport = if config.broker_url.starts_with("ws") {
            Transport::wss(ca, client_auth, None)
        } else {
            Transport::tls(ca, client_auth, None)
        };
        options.set_transport(transport);
    }
    let (client, mut eventloop) = AsyncClient::new(options, INGESTION_CAPACITY);
    client.subscribe(config.topic_filter(), config.qos).await.map_err(|error| error.to_string())?;
    loop {
        match eventloop.poll().await.map_err(|error| error.to_string())? {
            Event::Incoming(Packet::Publish(publish)) => {
                sender.send(InboundTelemetry { topic: publish.topic, payload: publish.payload.to_vec() })
                    .await.map_err(|_| "telemetry processor stopped".to_string())?;
            }
            _ => {}
        }
    }
}

fn with_client_id(broker_url: &str, client_id: &str) -> String {
    let separator = if broker_url.contains('?') { '&' } else { '?' };
    format!("{broker_url}{separator}client_id={}", percent_encode(client_id))
}

fn percent_encode(value: &str) -> String {
    value.bytes().fold(String::new(), |mut encoded, byte| {
        if byte.is_ascii_alphanumeric() || matches!(byte, b'-' | b'_' | b'.' | b'~') {
            encoded.push(byte as char);
        } else {
            encoded.push_str(&format!("%{byte:02X}"));
        }
        encoded
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn client_id_is_added_and_encoded() {
        assert_eq!(with_client_id("mqtt://broker:1883", "daq gateway"), "mqtt://broker:1883?client_id=daq%20gateway");
        assert_eq!(with_client_id("mqtt://broker:1883?foo=bar", "daq"), "mqtt://broker:1883?foo=bar&client_id=daq");
    }

    #[test]
    fn duplicate_event_ids_are_published_once() {
        let state = GatewayState::new();
        let mut receiver = state.subscribe();
        let event = TelemetryEvent {
            schema_version: Some(1), event_id: Some("event-1".into()), experiment_id: 1,
            device_id: Some("daq-1".into()), timestamp: "2026-09-02T00:00:00Z".into(),
            sequence: Some(1), measurements: [("temperature_c".into(), 20.0)].into(),
            quality: Some("good".into()), source_topic: None,
        };
        state.publish(event.clone());
        state.publish(event);
        assert_eq!(receiver.try_recv().unwrap().event_id.as_deref(), Some("event-1"));
        assert!(matches!(receiver.try_recv(), Err(broadcast::error::TryRecvError::Empty)));
    }

    #[test]
    fn sequence_is_used_when_event_id_is_missing() {
        let state = GatewayState::new();
        let mut receiver = state.subscribe();
        let event = TelemetryEvent {
            schema_version: None, event_id: None, experiment_id: 1,
            device_id: Some("daq-1".into()), timestamp: "2026-09-02T00:00:00Z".into(),
            sequence: Some(7), measurements: Default::default(), quality: None, source_topic: None,
        };
        state.publish(event.clone());
        state.publish(event);
        assert!(receiver.try_recv().is_ok());
        assert!(receiver.try_recv().is_err());
    }
}