import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getGenre } from "../repositories/genres.repository.js";
import { movieSchema } from "../schemas/movie.schema.js";

async function verifyMovie (req: Request, res: Response, next: NextFunction) {
    const { error } = movieSchema.validate(
        req.body,
        { abortEarly: false }
    )
    
    if (error) {
        console.log(error.message);
        
        if (error.message === '"image" must be a valid uri'){
            return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
        } 
       
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const validGenre = await getGenre(req.body.genre);

    if (!validGenre){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    next();
}

export { verifyMovie };