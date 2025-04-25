use actix_web::{
    web::Json,
    HttpResponse
};
use core::api::basic_actions::{
    create::create as create_core,
    read::get_experiments as get_experiments_core
};
use dal::experiments::{
    transactions::{
        create::SaveExperiment,
        read::GetExperiments,
    },
    schema::NewExperimentItem
};
use glue::errors::NanoServiceError;

pub async fn create<T: SaveExperiment + GetExperiments>(
    token: HeaderToken,   
    body: Json<NewExperimentItem>
) -> Result<HttpResponse, NanoServiceError> {

    let _ = create_core::<T>(body.into_inner()).await?;
    Ok(HttpResponse::Created().json(get_experiments_core::<T>().await?))
}
