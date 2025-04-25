use actix_web::{ 
    HttpResponse,
    web::Json
};
use coremod::api::basic_actions::{
    update::update as update_core,
    read::get_experiments as get_experiments_core
};
use dal::experiments::{
    transactions::{ 
        update::UpdateExperiment,
        read::GetExperiments
    },
    schema::ExperimentItem
};
use glue::errors::NanoServiceError;

pub async fn update<T: UpdateExperiment + GetExperiments>(body: Json<ExperimentItem>)
    -> Result<HttpResponse, NanoServiceError> {
    let _ = update_core::<T>(body.into_inner()).await?;
    Ok(HttpResponse::Ok().json(get_experiments_core::<T>().await?))
}
