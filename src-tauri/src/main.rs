#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use serde_json::Value;
use std::collections::HashMap;
#[tauri::command]
async fn get_todos() -> Result<Value, String> {
    let client = reqwest::Client::new();
    let resp = client
        .get("http://127.0.0.1:4000/todos")
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let to_json = resp
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    let todos = to_json["result"].clone();

    Ok(todos)
}

#[tauri::command]
async fn add_todo(title: String, content: String, date: String) -> Result<Value, String> {
    let mut map = HashMap::new();
    map.insert("title", title);
    map.insert("content", content);
    map.insert("date", date);

    let client = reqwest::Client::new();
    let resp = client
        .post("http://127.0.0.1:4000/todos")
        .json(&map)
        .send()
        .await
        .map_err(|e| e.to_string())?;
    let to_json = resp
        .json::<serde_json::Value>()
        .await
        .map_err(|e| e.to_string())?;
    let todo = to_json["result"].clone();

    Ok(todo)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_todos, add_todo])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
