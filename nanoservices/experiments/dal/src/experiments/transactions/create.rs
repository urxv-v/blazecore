use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::{ExperimentItem, NewExperimentItem};

use super::super::descriptors::JsonFileDescriptor;
use crate::json_file::{get_experiments, save_experiments};
use std::collections::HashMap;

use crate::connections::sqlx_postgres::SQLX_POSTGRES_POOL;
use super::super::descriptors::SqlxPostGresDescriptor;
use glue::errors::NanoServiceErrorStatus;

pub trait SaveExperiment {
    fn save_experiment(item: NewExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send;
}

impl SaveExperiment for JsonFileDescriptor {
    fn save_experiment(item: NewExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send
    {
        json_file_save_experiment(item)
    }
}

async fn json_file_save_experiment(item: NewExperimentItem)
    -> Result<ExperimentItem, NanoServiceError> {
    let mut tasks = get_experiments::<ExperimentItem>().unwrap_or_else(|_|
        HashMap::new()
    );
    let experiment_item = ExperimentItem {
        id: 1,
        name: item.name,
        status: item.status.to_string()
    };
    tasks.insert(
        experiment_item.name.to_string(),
        experiment_item.clone()
    );
    let _ = save_experiments(&tasks)?;
    Ok(experiment_item)
}

impl SaveExperiment for SqlxPostGresDescriptor {
    fn save_experiment(item: NewExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send
    {
        sqlx_postgres_save_one(item)
    }
}

async fn sqlx_postgres_save_experiment(item: NewExperimentItem)
    -> Result<ExperimentItem, NanoServiceError> {
    let item = sqlx::query_as::<_, ExperimentItem>("
        INSERT INTO experiment_item (name, status)
        VALUES ($1, $2)
        RETURNING *"
    ).bind(item.name)
    .bind(item.status.to_string())
    .fetch_one(&*SQLX_POSTGRES_POOL).await.map_err(|e| {
        NanoServiceError::new(
            e.to_string(),
            NanoServiceErrorStatus::Unknown
        )
    })?;
    Ok(item)
}

