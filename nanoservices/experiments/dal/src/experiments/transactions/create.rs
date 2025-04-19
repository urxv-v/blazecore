use std::future::Future;
use glue::errors::NanoServiceError;
use crate::experiments::schema::{ExperimentItem, NewExperimentItem};

pub trait SaveOne {
    fn save_one(item: NewExperimentItem) ->
    impl Future<Output = Result<ExperimentItem, NanoServiceError>> + Send;
}
