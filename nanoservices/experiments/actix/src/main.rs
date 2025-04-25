use actix_web::{
    App,
    HttpServer,
    middleware::Logger
};
use actix_cors::Cors;
use dal::migrations::run_migrations;
mod api;

#[tokio::main]
async fn main() -> std::io::Result<()> {
    if let Err(e) = run_migrations().await{
        eprintln!("Migration error: {:?}", e);
        return Err(std::io::Error::new(std::io::ErrorKind::Other, "Database migration failed"));
    }

    let server_address = "127.0.0.1:8080"; 
    println!("🚀 Server running at {}", server_address);

    HttpServer::new(|| {
        App::new()
            .wrap(Logger::default()) 
            .wrap(Cors::permissive()) 
            .configure(api::views_factory)
    })
    .workers(4)
    .bind(server_address)?
    .run()
    .await
}
