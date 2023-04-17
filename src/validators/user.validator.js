import Joi from 'joi';

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-Я\s']+$/).required().messages({
        'string.pattern.base': "Name may consist only of letters, space or ' ",
    }),
    username: Joi.string().regex(/^[a-zA-Z0-9.\-_]+$/).required().messages({
        'string.pattern.base': "username may consist of letters,numbers  or '.', '-','_' ",
    }),
    email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required().messages({
        'string.pattern.base': "Email is not correct!",
    }),
    phone: Joi.string().regex(/^[0-9\-\s()+]+$/).required().messages({
            'string.pattern.base': "Phone is not correct!"
        }
    )
})

export {userValidator}