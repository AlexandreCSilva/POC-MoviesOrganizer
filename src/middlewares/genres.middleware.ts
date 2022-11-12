import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getGenre } from "../repositories/genres.repository.js";
import { genreSchema } from "../schemas/genre.schema.js";

async function verifyGenre (req: Request, res: Response, next: NextFunction) {
    const { error } = genreSchema.validate(
        req.body,
        { abortEarly: false }
    )
    
    console.log(error)
    if (error) {
        console.log(error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    let usedGenre = await getGenre(req.body);

    if (usedGenre){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }
    
    next();
}

export { 
    verifyGenre
};