use actix_web::web::{
    delete,
    get,
    post,
    put,
    scope,
    ServiceConfig
};
use dal::experiments::descriptors::SqlxPostGresDescriptor;

pub mod create;
pub mod read;
pub mod update;
pub mod delete;

pub fn basic_actions_factory(app: &mut ServiceConfig) {
    app.service(
        scope("/api/v1") 
            .route("/get/all", get().to(read::get_experiments::<SqlxPostGresDescriptor>))
            .route("/get/{name}", get().to(read::get_experiment_by_name::<SqlxPostGresDescriptor>))
            .route("/create", post().to(create::create::<SqlxPostGresDescriptor>))
            .route("/delete/{name}", delete().to(delete::delete_by_name::<SqlxPostGresDescriptor>))
            .route("/update", put().to(update::update::<SqlxPostGresDescriptor>)),
    );
}


