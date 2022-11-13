import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { insertMovie, getMoviesRepository, getMoviesGenre, getMoviesPlataform } from "../repositories/movies.repository.js";

async function postMovie (req: Request, res: Response) {
    const movie = {
        name: req.body.name as string,
        image: req.body.image as string,
        genreId: res.locals.genre.id as number,
        plataformId: res.locals.plataform.id as number
    }

    await insertMovie(movie);

    return res.sendStatus(STATUS_CODE.CREATED)
}

async function getMovies(req: Request, res: Response) {
    const movies = await getMoviesRepository();

    return res.send(movies).status(STATUS_CODE.OK);
}

async function getMoviesByGenre(req: Request, res: Response) {
    const movies = await getMoviesGenre(res.locals.genre.id);

    return res.send(movies).status(STATUS_CODE.OK);
}

async function getMoviesByPlataform(req: Request, res: Response) {
    const movies = await getMoviesPlataform(res.locals.plataform.id);

    return res.send(movies).status(STATUS_CODE.OK);
}
 
export { 
    postMovie,
    getMovies,
    getMoviesByGenre,
    getMoviesByPlataform
};