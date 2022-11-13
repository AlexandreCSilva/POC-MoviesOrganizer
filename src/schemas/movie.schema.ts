import Joi from "joi";
import { Movie } from "../protocols/movie.protocol.js";

const movieSchema: Joi.ObjectSchema<Movie> = Joi.object({
    name: Joi
            .string()
            .required(),
    image: Joi
            .string()
            .uri()
            .required(),
    genre: Joi
            .string()
            .required(),
    plataform: Joi
            .string()
            .required()
});

export { 
        movieSchema
};