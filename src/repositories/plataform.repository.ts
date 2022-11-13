import { QueryResult } from "pg";
import { connection } from "../database/database.js";

async function insertPlataform (name: string): Promise<QueryResult<Array<string>>>{
    const plataform = await connection.query(
        'INSERT INTO plataforms (name) VALUES ($1)',
        [name]
    );
    
    return plataform.rows[0];
}

async function getPlataform (name: string): Promise<QueryResult<Array<string>>>{
    const plataform = await connection.query(
        'SELECT * FROM plataforms WHERE name = $1',
        [name]
    );

    return plataform.rows[0];
}

export {
    getPlataform,
    insertPlataform
};
