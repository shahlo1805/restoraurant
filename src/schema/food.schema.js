import Joi from "joi";

export const createProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().positive().required(),
    imageurl: Joi.string(),
    category: Joi.string().required()
}).required()

