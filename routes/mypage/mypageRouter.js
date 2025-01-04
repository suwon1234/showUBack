import express from 'express';
import likeRouter from './likeRouter.js';
import myActiveRouter from './myActiveRoter.js';
import myVodRouter from './myVodRouter.js';
import myShowuRouter from './myShowuRouter.js';

const mypageRouter = express.Router()

//팀매칭
mypageRouter.use("/myTeam", myShowuRouter)

// 활동 정보 
mypageRouter.use("/my-active", myActiveRouter)

//찜
mypageRouter.use("/like", likeRouter)

// vod
mypageRouter.use("/vod", myVodRouter)


export default mypageRouter