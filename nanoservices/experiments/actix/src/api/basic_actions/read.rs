use actix_web::{
    HttpRequest,
    HttpResponse
};
use coremod::api::basic_actions::read::{
    get_experiments as get_experiments_core,
    get_experiment_by_name  as get_experiment_by_name_core
};
use dal::experiments::transactions::read::{
    GetExperiments,
    GetExperimentByName
};
use glue::errors::{
    NanoServiceError,
    NanoServiceErrorStatus
};

pub async fn get_experiments<T: GetExperiments>()
    -> Result<HttpResponse, NanoServiceError> {
    Ok(HttpResponse::Ok().json(get_experiments_core::<T>().await?))
}

pub async fn get_experiment_by_name<T: GetExperimentByName>(req: HttpRequest)
    -> Result<HttpResponse, NanoServiceError> {
    let name = match req.match_info().get("name") {
        Some(name) => name,
        None => {
            return Err(NanoServiceError::new(
                "Name not provided".to_string(),
                NanoServiceErrorStatus::BadRequest,
            ))
        }
    };
    Ok(HttpResponse::Ok().json(get_experiment_by_name_core::<T>(name).await?))
}
