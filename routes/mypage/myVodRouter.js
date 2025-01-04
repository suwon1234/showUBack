import express from 'express';
import passport from 'passport';
import { vodSubscript } from '../../controller/mypage/mypageController.js';

const myVodRouter = express.Router()

// 구독한 리스트 '/my/vod/subscript'
myVodRouter.get("/subscript", passport.authenticate('jwt', { session: false }), vodSubscript)

export default myVodRouter