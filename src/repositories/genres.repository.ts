import { QueryResult } from "pg";
import { connection } from "../database/database.js";

async function insertGenre (){

}

async function getGenre (name: string): Promise<QueryResult<Array<string>>>{
    let genre = await connection.query(
        'SELECT * FROM genres WHERE name = $1',
        [name]
    );

    return genre.rows[0];
}

export {
    getGenre,
    insertGenre
};
