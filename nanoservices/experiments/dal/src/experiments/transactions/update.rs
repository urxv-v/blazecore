use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::ExperimentItem;

use super::super::descriptors::JsonFileDescriptor;
use crate::json_file::{get_experiments, save_experiments};
use std::collections::HashMap;

use crate::connections::sqlx_postgres::SQLX_POSTGRES_POOL;
use super::super::descriptors::SqlxPostGresDescriptor;
use glue::errors::NanoServiceErrorStatus;

impl UpdateExperiment for JsonFileDescriptor {
    fn update_experiment(item: ExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send {
        json_file_update_one(item)
    }
}

async fn json_file_update_experiment(item: ExperimentItem) ->
    Result<ExperimentItem, NanoServiceError> {
    let mut experiments = get_experiments::<ExperimentItem>().unwrap_or_else(|_|
        HashMap::new()
    );
    if !experiments.contains_key(&item.name) {
        return Err(NanoServiceError::new(
            format!("Item with name {} not found", item.name),
            NanoServiceErrorStatus::NotFound
        ));
    }
    experiments.insert(item.name.clone(), item.clone());
    let _ = save_experiments(&experiments)?;
    Ok(item)
}

impl UpdateExperiment for SqlxPostGresDescriptor {
    fn update_experiment(item: ExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send {
        sqlx_postgres_update_one(item)
    }
}

async fn sqlx_postgres_update_experiment(item: ExperimentItem) ->
    Result<ExperimentItem, NanoServiceError> {
    let item = sqlx::query_as::<_, ExperimentItem>("
        UPDATE experiments
        SET name = $1, status = $2
        WHERE id = $3
        RETURNING *"
    ).bind(item.name)
    .bind(item.status.to_string())
    .bind(item.id)
    .fetch_one(&*SQLX_POSTGRES_POOL).await.map_err(|e| {
        NanoServiceError::new(
            e.to_string(),
            NanoServiceErrorStatus::Unknown
        )
    })?;
    Ok(item)
}
