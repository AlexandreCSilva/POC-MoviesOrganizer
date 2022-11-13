import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { getMovies } from "../controllers/movies.controller.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import { Review } from "../protocols/reviews.protocol.js";
import { getGenre } from "../repositories/genres.repository.js";
import { getMovieId, getMoviesByName } from "../repositories/movies.repository.js";
import { getPlataform } from "../repositories/plataform.repository.js";
import { genreSchema } from "../schemas/genre.schema.js";
import { movieSchema } from "../schemas/movie.schema.js";
import { plataformSchema } from "../schemas/plataform.schema.js";
import { reviewSchema } from "../schemas/review.schema.js";

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

async function verifyMoviePlataform (req: Request, res: Response, next: NextFunction) {
    const plataform: string = req.query.plataform as string;

    const { error } = plataformSchema.validate(
        { name: plataform},
        { abortEarly: false }
    );

    if (error) {
        console.log(error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const validPlataform = await getPlataform(plataform);

    if (!validPlataform){
        console.log('Plataform do not exist')
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.locals.plataform = validPlataform;
    
    next();
}

async function verifyMovieById (req: Request, res: Response, next: NextFunction) {
    const id: string = req.query.id as string;

    if (!id) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const validId = await getMovieId(id);

    if (validId.length == 0){
        console.log('Id do not exist')
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    
    next();
}

async function verifyMovieReview (req: Request, res: Response, next: NextFunction) {
    const review: Review = { 
        review: req.body.review,
        note: req.body.note
    };
    
    const { error } = reviewSchema.validate(
        review,
        { abortEarly: false }
    );

    if (error){
        console.log(error.message)
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
    
    next();
}

export { 
    verifyMovie,
    verifyMovieGenre,
    verifyMoviePlataform,
    verifyMovieById,
    verifyMovieReview
};