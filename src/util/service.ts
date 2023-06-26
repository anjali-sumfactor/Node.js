import express, { Request, Response, NextFunction, Application, ErrorRequestHandler } from 'express';

import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET_KEY as string

const refreshToken: string = process.env.REFRESH_TOKEN_SECRET as string

interface JwtToken {
    email: string,
    password: string
}

export const generateAcessToken = (user: JwtToken) => {
    console.log({ user })
    return jwt.sign(user, secret, { expiresIn: '2m' })
}

interface refreshJwtToken {
    user: object
}

export const refreshAcessToken = (tokenUser: refreshJwtToken) => {
    console.log(tokenUser);
    return jwt.sign(tokenUser.user, refreshToken)
}

export const verifyToken = (req: Request, res: Response, next: NextFunction,) => {

    if (req.headers['authorization']?.split(' ')[1] == null) return res.sendStatus(401)

    jwt.verify(req.headers['authorization']?.split(' ')[1], secret, (err: any, user: any) => {
        if (err) {
            return res.sendStatus(403)
        }

        next()
    })
}