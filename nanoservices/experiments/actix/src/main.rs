use actix_web::{
    App,
    HttpServer,
    middleware::Logger
};
use actix_cors::Cors;
use dal::migrations::run_migrations;
#[tokio::main]
async fn main() -> std::io::Result<()> {
    if let Err(e) = run_migrations().await{
        eprintln!("Migration error: {:?}", e);
        return Err(std::io::Error::new(std::io::ErrorKind::Other, "Database migration failed"));
    }

    let server_address = "0.0.0.0:8080"; 
    println!("🚀 Server running at {}", server_address);

    let gateway_state = actix::gateway::GatewayState::new();
    let gateway_config = actix::gateway::GatewayConfig::from_env()
        .map_err(|error| std::io::Error::new(std::io::ErrorKind::InvalidInput, error))?;
    let _gateway_task = actix::gateway::start(gateway_config, gateway_state.clone());

    HttpServer::new(move || {
        let gateway_state = gateway_state.clone();
        App::new()
            .app_data(actix_web::web::Data::new(gateway_state))
            .wrap(Logger::default()) 
            .wrap(Cors::permissive()) 
            .configure(actix::views_factory)
    })
    .workers(4)
    .bind(server_address)?
    .run()
    .await
}
