import express from 'express';
import { register, login, remove, modify } from '../../controller/user/userController.js';
import passport from 'passport';

const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.put("/modify", passport.authenticate('jwt', { session: false }), modify)
userRouter.delete("/remove", remove)

export default userRouter