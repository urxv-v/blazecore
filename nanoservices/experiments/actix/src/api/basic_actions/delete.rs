use actix_web::{
    HttpRequest,
    HttpResponse
};
use coremod::api::basic_actions::{
    delete::delete as delete_core,
    read::get_experiments as get_experiments_core
};
use dal::experiments::transactions::{
    delete::DeleteExperiment,
    read::GetExperiments
};
use glue::errors::{
    NanoServiceError,
    NanoServiceErrorStatus
};

pub async fn delete_by_name<T: DeleteExperiment + GetExperiments>(req: HttpRequest)
    -> Result<HttpResponse, NanoServiceError> {
    match req.match_info().get("name") {
        Some(name) => {
            delete_core::<T>(name).await?;
        },
        None => {
            return Err(
                NanoServiceError::new(
                    "Name not provided".to_string(),
                    NanoServiceErrorStatus::BadRequest
                )
            )
        }
    };
    Ok(HttpResponse::Ok().json(get_experiments_core::<T>().await?))
}
