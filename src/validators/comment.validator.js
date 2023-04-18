import Joi from 'joi';

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-Я\s']+$/).required().messages({
        'string.pattern.base': "Name may consist only of letters, space or ' ",
    }),
    body: Joi.string().required(),
    email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required().messages({
        'string.pattern.base': "Email is not correct!",
    }),
    postId: Joi.number().required().min(1).max(100)
})
export {commentValidator}