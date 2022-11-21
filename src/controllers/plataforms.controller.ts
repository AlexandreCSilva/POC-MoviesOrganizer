import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { insertPlataform } from "../repositories/plataform.repository.js";

async function postPlataform (req: Request, res: Response) {
    try {
        await insertPlataform(req.body.name);

        return res.sendStatus(STATUS_CODE.CREATED)
    } catch (error) {
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }
}

export { 
    postPlataform
};