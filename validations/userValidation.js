import Joi from 'joi';

export const userValidationSchema = Joi.object({
    username: Joi.string().required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .required(),
    
    cpassword: Joi.string()
        .required(),
        

    role: Joi.string().optional()
}); 