import { body } from "express-validator";
export const regiValidation =[
    body('email', 'неверный формат почты').isEmail(),
    body('password', 'короткий пароль').isLength({min: 5}),
    body('nickname', 'короткий логин ').isLength({min: 3}),
    body('avatar', 'проблема с авой ').optional().isURL(),
]