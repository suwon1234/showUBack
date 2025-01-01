import express from 'express';
import { register, login, remove, modify, upgrade, modifyUpdate, upgradeInfo, findId } from '../../controller/user/userController.js';
import passport from 'passport';

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.put("/modify", passport.authenticate('jwt', { session: false }), modify)
userRouter.delete("/remove", passport.authenticate('jwt', { session: false }), remove)

//아이디 찾기
userRouter.post("/find-id", passport.authenticate('jwt', { session: false }), findId)

// 등급업 신청
userRouter.post("/upgrade", passport.authenticate('jwt', { session: false }), upgrade)
userRouter.get("/upgrade/:id", passport.authenticate('jwt', { session: false }), upgradeInfo)
// 등급업 수정
userRouter.put("/upgrade/modify/:id", modifyUpdate)

export default userRouter