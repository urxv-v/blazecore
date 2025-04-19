use serde::{Serialize, Deserialize};
use super::enums::TaskStatus;
use std::collections::HashMap;

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NewExperimentItem {
    pub name: String,
    pub status: TaskStatus
}

#[derive(Serialize, Deserialize, Debug, Clone, PartialEq)]
#[cfg_attr(feature = "sqlx-postgres", derive(sqlx::FromRow))]
pub struct ExperimentItem {
    pub id: i32,
    pub name: String,
    pub status: String
}
