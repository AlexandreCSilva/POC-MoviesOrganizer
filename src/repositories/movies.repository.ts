import { movies } from "@prisma/client";
import { connection } from "../database/database.js";

export type movieCreateType = {
    name: string,
    image: string,
    genresId: number,
    plataformsId: number
}

async function insertMovie(movie: movieCreateType): Promise<number>{
    const response = await connection.movies.create({
        data: movie
    });
    
    return response.id;
}

async function getMovieByName (name: string): Promise<movies>{
    const movie = await connection.movies.findFirst({
        where: {
            name: name
        }
    });

    return movie;
}

async function getMoviesRepository (): Promise<Array<movies>>{
    const movies = await connection.movies.findMany({
        where: {}
    });

    return movies;
}


async function getMoviesGenre (id: number): Promise<Array<movies>>{
    const movies = await connection.movies.findMany({
        where: {
            genresId: id
        }
    });

    return movies;
}

async function getMoviesPlataform (id: number): Promise<Array<movies>>{
    const movies = await connection.movies.findMany({
        where: {
            plataformsId: id
        }
    });

    return movies;
}

async function getMovieId (id: number): Promise<movies>{
    const movie = await connection.movies.findFirst({
        where: {
            id: id
        }
    });

    return movie;
}

async function deleteMovieById (id: number): Promise<movies>{
    const movie = await connection.movies.delete({
        where: {
            id: id
        }
    });

    return movie;
}

async function updateMovie (id: number, review: string, note: number): Promise<movies>{
    const movie = await connection.movies.update({
        where: {
            id: id
        },
        data: {
            review: review,
            note: note
        }
    });

    return movie;
}


export {
    getMovieByName,
    insertMovie,
    getMoviesRepository,
    getMoviesGenre,
    getMoviesPlataform,
    getMovieId,
    deleteMovieById,
    updateMovie
};
