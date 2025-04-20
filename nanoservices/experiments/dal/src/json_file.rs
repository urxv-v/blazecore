use glue::errors::{NanoServiceError, NanoServiceErrorStatus};
use glue::safe_eject;
use serde::{de::DeserializeOwned, Serialize};
use std::collections::HashMap;
use std::env;
use std::fs::{File, OpenOptions};
use std::io::{Read, Write};

const DEFAULT_JSON_PATH: &str = "./experiments.json";

fn json_file_path() -> String {
    env::var("JSON_STORE_PATH").unwrap_or_else(|_| DEFAULT_JSON_PATH.to_string())
}

fn open_json_file_rw() -> Result<File, NanoServiceError> {
    let file_path = get_json_path();
    let file = safe_eject!(
        OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .open(&file_path),
        NanoServiceErrorStatus::Unknown,
        "Error reading JSON file"
    )?;
    Ok(file)
}

fn get_write_handle() -> Result<File, NanoServiceError> {
    let file_path = get_json_path();
    let file = safe_eject!(
        OpenOptions::new()
            .write(true)
            .create(true)
            .truncate(true)
            .open(&file_path),
        NanoServiceErrorStatus::Unknown,
        "Error reading JSON file (write handle)"
    )?;
    Ok(file)
}
