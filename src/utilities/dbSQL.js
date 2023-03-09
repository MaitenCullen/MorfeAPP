import { enablePromise, openDatabase } from "react-native-sqlite-storage";
import * as SQLite from "expo-sqlite";


enablePromise(true);

const DATASE_NAME = 'task.db';

export async function getDbConection() {
    const db = await openDatabase({ name: DATASE_NAME, location: 'default'});
    return db;
} 

export async function creatreTable(db) {
    const query = 
    "CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(512))";
    return db.executeSql(query);
}

export async function initDatabase() {
    const db = await getDbConection();
    await creatreTable(db);
    db.close();
}

export async function insertTask(db, title){
    const insertQuery = `INSERT INTO task (title) values ('${title}')`;
    const result = await db.executeSql(insertQuery);
    return result;
}

export async function getTasks(db) {
    const tasks = [];
    const result = await db.executeSql('SELECT id, title FROM task');
    result.forEach(function(resultSet){
        for(let index = 0; index < resultSet.rows.length; index++){
            tasks.push(resultSet.rows.item(index));
        }
    });
    return tasks
}

