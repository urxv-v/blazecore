use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::ExperimentItem;

use super::super::descriptors::JsonFileDescriptor;
use crate::json_file::{get_experiments, save_experiments};
use std::collections::HashMap;

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
