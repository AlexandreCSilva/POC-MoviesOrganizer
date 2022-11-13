import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getGenre } from "../repositories/genres.repository.js";
import { getMoviesByName } from "../repositories/movies.repository.js";
import { getPlataform } from "../repositories/plataform.repository.js";
import { genreSchema } from "../schemas/genre.schema.js";
import { movieSchema } from "../schemas/movie.schema.js";

async function verifyMovie (req: Request, res: Response, next: NextFunction) {
    const { error } = movieSchema.validate(
        req.body,
        { abortEarly: false }
    );
    
    if (error) {
        console.log(error.message);
        
        if (error.message === '"image" must be a valid uri'){
            return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
        } 
       
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const validMovie = await getMoviesByName(req.body.name);

    if (validMovie){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    const validGenre = await getGenre(req.body.genre);

    if (!validGenre){
        console.log('Genre do not exist')
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    const validPlataform = await getPlataform(req.body.plataform);

    if (!validPlataform){
        console.log('Plataform do not exist')
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.locals.genre = validGenre;
    res.locals.plataform = validPlataform;

    next();
}

async function verifyMovieGenre (req: Request, res: Response, next: NextFunction) {
    const genre: string = req.query.genre as string;

    const { error } = genreSchema.validate(
        { name: genre},
        { abortEarly: false }
    );

    if (error) {
        console.log(error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const validGenre = await getGenre(genre);

    if (!validGenre){
        console.log('Genre do not exist')
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.locals.genre = validGenre;
    
    next();
}

export { 
    verifyMovie,
    verifyMovieGenre
};