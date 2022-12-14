import Joi from "joi";

const genreSchema: Joi.ObjectSchema<{name: string}> = Joi.object({
    name: Joi
            .string()
            .required()
});

export { 
    genreSchema
};