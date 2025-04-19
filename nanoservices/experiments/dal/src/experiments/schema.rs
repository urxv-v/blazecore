use serde::{Serialize, Deserialize};
use super::enums::TaskStatus;
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NewExperimentItem {
    pub name: String,
    pub status: TaskStatus
}
