import { plataforms } from "@prisma/client";
import { connection } from "../database/database.js";

async function insertPlataform (name: string): Promise<plataforms>{
    const plataform = await connection.plataforms.create({
        data: {
            name: name
        }
    });
    
    return plataform;
}

async function getPlataform (name: string): Promise<plataforms>{
    const plataform = await connection.plataforms.findFirst({
        where: {
            name: name
        }
    });

    return plataform;
}

export {
    getPlataform,
    insertPlataform
};
