import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { insertGenre } from "../repositories/genres.repository.js";

async function postGenre (req: Request, res: Response) {
    try {
        await insertGenre(req.body.name);

        return res.sendStatus(STATUS_CODE.CREATED);
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}

export { 
    postGenre
};