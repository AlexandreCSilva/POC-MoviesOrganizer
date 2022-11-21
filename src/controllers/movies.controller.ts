import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { insertMovie, getMoviesRepository, getMoviesGenre, getMoviesPlataform, deleteMovieById, updateMovie, getMovieId } from "../repositories/movies.repository.js";

async function postMovie (req: Request, res: Response) {

        const movie = {
            name: req.body.name as string,
            image: req.body.image as string,
            genresId: res.locals.genre.id as number,
            plataformsId: res.locals.plataform.id as number
        }
    
        await insertMovie(movie);
    
        return res.sendStatus(STATUS_CODE.CREATED)
}

async function getMovies(req: Request, res: Response) {
    try {
        const movies = await getMoviesRepository();

        return res.send(movies).status(STATUS_CODE.OK);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}

async function getMoviesByGenre(req: Request, res: Response) {
    try {
        const movies = await getMoviesGenre(res.locals.genre.id as number);

        return res.send(movies).status(STATUS_CODE.OK);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}

async function getMoviesByPlataform(req: Request, res: Response) {
    try {
        const movies = await getMoviesPlataform(res.locals.plataform.id as number);

        return res.send(movies).status(STATUS_CODE.OK);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}
 
async function deleteMovie(req: Request, res: Response) {
    try {
        const movies = await deleteMovieById(req.query.id as unknown as number);

        return res.send(movies).status(STATUS_CODE.OK);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}

async function updateMovieController(req: Request, res: Response) {
    try {
        const movies = await updateMovie(req.query.id as unknown as number, req.body.review as string, req.body.note as number);

        return res.send(movies).status(STATUS_CODE.OK);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}
 
export { 
    postMovie,
    getMovies,
    getMoviesByGenre,
    getMoviesByPlataform,
    deleteMovie,
    updateMovieController
};