pub mod auth;
pub mod users;
use actix_web::web::{ServiceConfig, scope, post, get};
use auth_dal::users::descriptors::SqlxPostGresDescriptor;

pub fn views_factory(cfg: &mut ServiceConfig) {
    cfg.service(
        scope("/api/v1")
            .route("/auth/login", get().to(auth::login::login::<SqlxPostGresDescriptor>))
            .route("/users/create", post().to(users::create::create::<SqlxPostGresDescriptor>))
    );
}
