import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { insertMovie } from "../repositories/movies.repository.js";

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
 
export { 
    postMovie 
};