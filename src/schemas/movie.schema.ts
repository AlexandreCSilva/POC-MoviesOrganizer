import Joi from "joi";

const movieSchema = Joi.object({
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

export { movieSchema };