import { QueryResult } from "pg";
import { connection } from "../database/database.js";

async function insertMovie (movie: {name: string, image: string, genreId: number, plataformId: number}): Promise<QueryResult<Array<string>>>{
    // mudar o genres e o plataforms id
    const response = await connection.query(
        'INSERT INTO movies (name, image, "genresId", "plataformsId") VALUES ($1, $2, $3, $4)',
        [movie.name, movie.image, movie.genreId, movie.plataformId]
    );
    
    return response.rows[0];
}

async function getMoviesByName (name: string): Promise<QueryResult<Array<string>>>{
    const movie = await connection.query(
        'SELECT * FROM movies WHERE name = $1',
        [name]
    );

    return movie.rows[0];
}

async function getMoviesRepository (): Promise<any[string]>{
    const movie = await connection.query(
        'SELECT * FROM movies'
    );

    return movie.rows;
}

// tirar o plutal de genres e plataforms id
async function getMoviesGenre (id: number): Promise<any[string]>{
    const movie = await connection.query(
        'SELECT * FROM movies WHERE movies."genresId" = $1',
        [id]
    );

    return movie.rows;
}

async function getMoviesPlataform (id: number): Promise<any[string]>{
    const movie = await connection.query(
        'SELECT * FROM movies WHERE movies."plataformsId" = $1',
        [id]
    );

    return movie.rows;
}

export {
    getMoviesByName,
    insertMovie,
    getMoviesRepository,
    getMoviesGenre,
    getMoviesPlataform
};
