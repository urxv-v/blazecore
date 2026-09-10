import React, {
  createContext,
  useContext,
  useRef,
  useSyncExternalStore,
} from 'react';

export interface TelemetryEvent {
  schema_version?: number;
  event_id?: string;
  experiment_id: number;
  device_id?: string;
  timestamp: string;
  sequence?: number;
  measurements: Record<string, number>;
  quality?: string;
}

export interface TelemetrySnapshot {
  status: 'connecting' | 'live' | 'reconnecting' | 'offline';
  lastEvent: TelemetryEvent | null;
  history: Record<string, number[]>;
  lastReceivedAt: number | null;
}

const EMPTY_SNAPSHOT: TelemetrySnapshot = {
  status: 'offline',
  lastEvent: null,
  history: {},
  lastReceivedAt: null,
};

class TelemetryStore {
  private snapshots = new Map<number, TelemetrySnapshot>();
  private listeners = new Map<number, Set<() => void>>();
  private sockets = new Map<number, WebSocket>();
  private reconnectTimers = new Map<number, number>();

  getSnapshot(experimentId: number): TelemetrySnapshot {
    return this.snapshots.get(experimentId) || EMPTY_SNAPSHOT;
  }

  subscribe(experimentId: number, listener: () => void): () => void {
    let listeners = this.listeners.get(experimentId);
    if (!listeners) {
      listeners = new Set();
      this.listeners.set(experimentId, listeners);
      this.connect(experimentId);
    }
    listeners.add(listener);

    return () => {
      listeners?.delete(listener);
      if (listeners?.size === 0) {
        this.close(experimentId);
        this.listeners.delete(experimentId);
      }
    };
  }

  private setSnapshot(experimentId: number, snapshot: TelemetrySnapshot) {
    this.snapshots.set(experimentId, snapshot);
    this.listeners.get(experimentId)?.forEach(listener => listener());
  }

  private connect(experimentId: number) {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const token = localStorage.getItem('blazecore_token');
    const query = token ? `?access_token=${encodeURIComponent(token)}` : '';
    const socket = new WebSocket(`${protocol}//${window.location.host}/api/v1/experiments/${experimentId}/stream${query}`);
    this.sockets.set(experimentId, socket);
    this.setSnapshot(experimentId, { ...this.getSnapshot(experimentId), status: 'connecting' });

    socket.onopen = () => {
      this.setSnapshot(experimentId, { ...this.getSnapshot(experimentId), status: 'live' });
    };
    socket.onmessage = event => {
      try {
        const telemetry = JSON.parse(event.data) as TelemetryEvent;
        if (telemetry.experiment_id !== experimentId || !telemetry.timestamp || !telemetry.measurements) return;
        const current = this.getSnapshot(experimentId);
        const history = { ...current.history };
        Object.entries(telemetry.measurements).forEach(([name, value]) => {
          if (!Number.isFinite(value)) return;
          history[name] = [...(history[name] || []), value].slice(-30);
        });
        this.setSnapshot(experimentId, {
          status: 'live',
          lastEvent: telemetry,
          history,
          lastReceivedAt: Date.now(),
        });
      } catch {
        // Ignore malformed frames; the gateway remains responsible for validation.
      }
    };
    socket.onerror = () => socket.close();
    socket.onclose = () => {
      if (!this.listeners.get(experimentId)?.size) return;
      this.sockets.delete(experimentId);
      this.setSnapshot(experimentId, { ...this.getSnapshot(experimentId), status: 'reconnecting' });
      const timer = window.setTimeout(() => this.connect(experimentId), 2000);
      this.reconnectTimers.set(experimentId, timer);
    };
  }

  private close(experimentId: number) {
    const timer = this.reconnectTimers.get(experimentId);
    if (timer !== undefined) window.clearTimeout(timer);
    this.reconnectTimers.delete(experimentId);
    this.sockets.get(experimentId)?.close();
    this.sockets.delete(experimentId);
    this.snapshots.delete(experimentId);
  }
}

const TelemetryContext = createContext<TelemetryStore | null>(null);

export const TelemetryProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const store = useRef(new TelemetryStore()).current;
  return <TelemetryContext.Provider value={store}>{children}</TelemetryContext.Provider>;
};

export function useTelemetry(experimentId: number): TelemetrySnapshot {
  const store = useContext(TelemetryContext);
  if (!store) throw new Error('useTelemetry must be used inside TelemetryProvider');
  return useSyncExternalStore(
    listener => store.subscribe(experimentId, listener),
    () => store.getSnapshot(experimentId),
    () => EMPTY_SNAPSHOT,
  );
}

export function metric(snapshot: TelemetrySnapshot, name: string, fallback: number): number {
  return snapshot.lastEvent?.measurements[name] ?? fallback;
}