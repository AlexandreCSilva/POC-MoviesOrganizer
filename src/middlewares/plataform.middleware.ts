import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";
import { getPlataform } from "../repositories/plataform.repository.js";
import { plataformSchema } from "../schemas/plataform.schema.js";

async function verifyPlataform (req: Request, res: Response, next: NextFunction) {
    const { error } = plataformSchema.validate(
        req.body,
        { abortEarly: false }
    )
    
    if (error) {
        console.log(error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const usedPlataform = await getPlataform(req.body.name);

    if (usedPlataform){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }
    
    next();
}

export { 
    verifyPlataform
};