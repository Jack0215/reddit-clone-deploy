import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../entities/User';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
        console.log('token', token);

        if (!token) {
            return next();
        }

        const { username }: any = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOneBy({ username });
        console.log('user', user);
        if (!user) throw new Error('Unauthenticated');

        //유저 정보를 res.locals.user에 넣어주기
        //언제든지 res안에서 꺼내 쓸 수 있음
        res.locals.user = user;

        return next();
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'Something went error' });
    }
};
