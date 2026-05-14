use actix_web::{web, HttpResponse};
use auth_dal::users::transactions::create::SaveOne;
use auth_core::api::users::create as core_create;
use glue::errors::NanoServiceError;

pub async fn create<T: SaveOne>(
    data: web::Json<auth_core::api::users::create::CreateUser>
) -> Result<HttpResponse, NanoServiceError> {
    let user = core_create::create::<T>(data.into_inner()).await?;
    Ok(HttpResponse::Ok().json(user))
}
