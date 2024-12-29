import express from 'express'
import passport from 'passport'
import { localStrategy, jwtStrategy, changePasswordStrategy } from '../../controller/auth/authController.js';

const authRouter = express.Router();

// 로컬 로그인
authRouter.post("/local", passport.authenticate('local', {session : false}), localStrategy)

// jwt 토큰
authRouter.post("/jwt", passport.authenticate('jwt', {session : false}), jwtStrategy)

//이메일 인증번호
authRouter.post("/api/change-password", changePasswordStrategy)

export default authRouter;