import { STATUS_CODE } from "../enums/statusCode.js";
import { movieSchema } from "../schemas/movie.schema.js";

async function verifyMovie (req, res, next) {
    let validation = movieSchema.validate(
        req.body,
        { abortEarly: false }
    )
    
    if (validation.error) {
        console.log(validation.error.message);
        
        if (validation.error.message === '"image" must be a valid uri'){
            return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
        } 
       
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    next();
}

export { verifyMovie };