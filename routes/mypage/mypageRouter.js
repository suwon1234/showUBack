import express from 'express';
import { getCommentsByUser } from '../../controller/mypage/mypageController.js';
import communityRouter from '../community/communityRouter.js';
import passport from 'passport';


const mypageRouter = express.Router()

// 커뮤니티 댓글 목록 
communityRouter.post("/comments/user", passport.authenticate('jwt', { session : false }) ,getCommentsByUser);


export default mypageRouter