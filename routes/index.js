import express from 'express';
import { index } from '../controller/index.js';
import userRouter from './user/userRouter.js';
import authRouter from './auth/authRouter.js';
import commentRouter from './community/commentRouter.js';
import showuRouter from './showu/showuRouter.js';
import shopRouter from './shop/shopRouter.js';
import vodRouter from './vod/vodRouter.js';
import reservationRouter from './reservation/reservationRouter.js';

const rootRouter = express.Router();

rootRouter.get("/", index)
rootRouter.use("/users", userRouter)
rootRouter.use("/auth", authRouter)
rootRouter.use("/community", commentRouter)
rootRouter.use("/showu", showuRouter)
rootRouter.use("/shop", shopRouter)
rootRouter.use("/vod", vodRouter)
rootRouter.use("/reservation", reservationRouter)

export default rootRouter;