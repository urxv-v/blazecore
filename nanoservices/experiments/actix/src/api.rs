use actix_web::web::ServiceConfig;
pub mod basic_actions;
use crate::gateway;
use actix_web::web::{get, scope};

pub fn views_factory(app: &mut ServiceConfig){
    basic_actions::basic_actions_factory(app);
    app.service(
        scope("/api/v1/experiments")
            .route("/{experiment_id}/stream", get().to(gateway::websocket::stream)),
    );
}
