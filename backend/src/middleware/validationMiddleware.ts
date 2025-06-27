import Joi, { ObjectSchema } from 'joi';
import { Request, Response, NextFunction } from 'express';

export const jobsiteSchema: ObjectSchema = Joi.object({
    name: Joi.string().min(3).required(),
    status: Joi.string().valid('Completed', 'On Hold', 'In Progress', 'On Road').required(),
    category: Joi.array().items(Joi.string()).min(1).required()
});

export const itemSchema: ObjectSchema = Joi.object({
    jobsiteId: Joi.string().required(),
    item: Joi.string().required(),
    quantity: Joi.number().required(),
    description: Joi.string().allow('').optional(),
    notes: Joi.string().allow('').optional()
});

export const validate = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return next();
    }
    next();
};

module.exports = {
    validate,
    jobsiteSchema,
    itemSchema
}; 