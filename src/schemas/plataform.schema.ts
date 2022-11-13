import Joi from "joi";

const plataformSchema: Joi.ObjectSchema<{name: string}> = Joi.object({
    name: Joi
            .string()
            .required()
});

export { 
    plataformSchema
};