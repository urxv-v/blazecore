use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::ExperimentItem;

use super::super::descriptors::JsonFileDescriptor;
use crate::json_file::get_experiments;
use std::collections::HashMap;


pub trait GetExperimentByName {
    fn get_experiment_by_name(name: &str) -> 
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send;
}

pub trait GetExperiments {
    fn get_experiments() ->
    impl Future<Output = Result<Vec<ExperimentItem>, NanoServiceError>> + Send;
}

impl GetExperiments for JsonFileDescriptor {
    fn get_experiments() ->
    impl Future<Output = Result<Vec<ExperimentItem>, NanoServiceError>> + Send {
        json_file_get_experiments()
    }
}
async fn json_file_get_experiments() ->
    Result<Vec<ExperimentItem>, NanoServiceError> {
    let experiments = get_experiments::<ExperimentItem>().unwrap_or_else(|_|
        HashMap::new()
    );
    let items = experiments.values().cloned().collect();
    Ok(items)
}

impl GetExperimentByName for JsonFileDescriptor {
    fn get_experiment_by_name(name: &str) -> 
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send {
        json_file_get_by_name(name)
    }
}

async fn json_file_get_by_experiment_name(name: &str) -> 
    Result<ExperimentItem, NanoServiceError> {
    let experiments = get_experiments::<ExperimentItem>().unwrap_or_else(|_| HashMap::new());
    
    experiments.get(name)
        .cloned()
        .ok_or_else(|| NanoServiceError::new(
            "Item not found".to_string(),
            NanoServiceErrorStatus::NotFound
        ))
}

