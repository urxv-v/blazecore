use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::ExperimentItem;

use super::super::descriptors::JsonFileDescriptor;
use crate::json_file::{get_experiments, save_experiments};
use std::collections::HashMap;

use crate::connections::sqlx_postgres::SQLX_POSTGRES_POOL;
use super::super::descriptors::SqlxPostGresDescriptor;
use glue::errors::NanoServiceErrorStatus;

pub trait DeleteExperiment{
    fn delete_experiment(name: String) -> 
        impl Future<Output = Result<ExperimentItem,NanoServiceError>> + Send;
}

impl DeleteExperiment for JsonFileDescriptor {
    fn delete_experiment(name: String) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send {
        json_file_delete_experiment(name)
    }
}

async fn json_file_delete_experiment(name: String) ->
    Result<ExperimentItem, NanoServiceError> {
    let mut experiments = get_experiments::<ExperimentItem>().unwrap_or_else(|_|
        HashMap::new()
    );
    let experiment_item = experiments.remove(
        &name
    ).ok_or_else(|| {
        NanoServiceError::new(
            "Item not found".to_string(),
            NanoServiceErrorStatus::NotFound
        )
    })?;
    let _ = save_all(&experiments)?;
    Ok(experiment_item)
}

impl DeleteExperiment for SqlxPostGresDescriptor {
    fn delete_experiment(name: String) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send {
        sqlx_postgres_delete_experiment(name)
    }
}

async fn sqlx_postgres_delete_experiment(name: String) ->
    Result<ExperimentItem, NanoServiceError> {
    let item = sqlx::query_as::<_, ExperimentItem>("
        DELETE FROM experiments
        WHERE name = $1
        RETURNING *"
    ).bind(name)
    .fetch_one(&*SQLX_POSTGRES_POOL).await.map_err(|e| {
        NanoServiceError::new(
            e.to_string(),
            NanoServiceErrorStatus::Unknown
        )
    })?;
    Ok(item)
}
