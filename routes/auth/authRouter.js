import express from 'express'
import passport from 'passport'
import { localStrategy, jwtStrategy } from '../../controller/auth/authController.js';

const authRouter = express.Router();

// 로컬 로그인
authRouter.post("/local", passport.authenticate('local', {session : false}), localStrategy)

// jwt 토큰
authRouter.post("/jwt", passport.authenticate('jwt', {session : false}), jwtStrategy)

export default authRouter;