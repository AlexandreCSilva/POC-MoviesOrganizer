import { genres } from "@prisma/client";
import { connection } from "../database/database.js";

async function insertGenre (name: string): Promise<Number>{
    const genre = await connection.genres.create({
        data: {
            name: name,
        }
    });
    
    return genre.id;
}

async function getGenre (name: string): Promise<genres>{
    const genre = await connection.genres.findFirst({
        where: {
            name: name
        }
    });

    return genre;
}

export {
    getGenre,
    insertGenre
};
