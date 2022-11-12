import { Request, Response } from "express";
import { STATUS_CODE } from "../enums/statusCode.js";

async function postGenre (req: Request, res: Response) {
    console.log("aqua");
}

export { 
    postGenre
};