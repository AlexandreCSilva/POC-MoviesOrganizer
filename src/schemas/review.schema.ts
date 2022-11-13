import Joi from "joi";
import { Review } from "../protocols/reviews.protocol.js";

const reviewSchema: Joi.ObjectSchema<Review> = Joi.object({
    review: Joi
            .string()
            .required(),
    note: Joi
            .number()
            .min(0)
            .max(10)
            .required()
});

export { 
        reviewSchema
};