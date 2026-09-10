use actix_web::web::{
    delete,
    get,
    post,
    put,
    scope,
    ServiceConfig
};
use dal::experiments::descriptors::SqlxPostGresDescriptor;
use auth_dal::users::descriptors::SqlxPostGresDescriptor as AuthDescriptor;
use auth_actix_server::api::auth::login;
use auth_actix_server::api::users::create as user_create;

pub mod create;
pub mod read;
pub mod update;
pub mod delete;

pub fn basic_actions_factory(app: &mut ServiceConfig) {
    app.service(
        scope("/api/v1/experiments")
            .route("/get/all", get().to(read::get_experiments::<SqlxPostGresDescriptor>))
            .route("/get/{name}", get().to(read::get_experiment_by_name::<SqlxPostGresDescriptor>))
            .route("/create", post().to(create::create::<SqlxPostGresDescriptor>))
            .route("/delete/{name}", delete().to(delete::delete_by_name::<SqlxPostGresDescriptor>))
            .route("/update", put().to(update::update::<SqlxPostGresDescriptor>))
    );
    app.service(
        scope("/api/v1")
            .route("/auth/login", get().to(login::login::<AuthDescriptor>))
            .route("/users/create", post().to(user_create::create::<AuthDescriptor>)),
    );
}


