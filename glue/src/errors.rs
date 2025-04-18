use thiserror::Error;
use serde::{Serialize, Deserialize};

#[derive(Error, Debug, Serialize, Deserialize, PartialEq)]
pub enum NanoServiceErrorStatus {
    #[error("Requested resource was not found")]
    NotFound,
    #[error("You are forbidden to access requested resource.")]
    Forbidden,
    #[error("Unknown Internal Error")]
    Unknown,
    #[error("Bad Request")]
    BadRequest,
    #[error("Conflict")]
    Conflict,
    #[error("Unauthorized")]
    Unauthorized,
}
