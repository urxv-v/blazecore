use glue::errors::{NanoServiceError, NanoServiceErrorStatus};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize, Debug, Clone)]
pub struct NewUser {
    pub email: String,
    pub password: String,
    pub unique_id: String
}

#[derive(Deserialize, Debug, Clone, PartialEq, sqlx::FromRow, Serialize)]
pub struct User {
    pub id: i32,
    pub email: String,
    pub password: String,
    pub unique_id: String
}

