import express from 'express';
import passport from 'passport';
import { getMyLesson, getMyTeamMatching } from '../../controller/mypage/myShowuController.js';

const myShowuRouter = express.Router()

// 팀매칭 목록 내역 '/my/showu/matching'
myShowuRouter.get("/matching", passport.authenticate('jwt', { session: false }), getMyTeamMatching)

// 개설한 레슨 목록 내역 '/my/showu/lesson'
myShowuRouter.get("/lesson", passport.authenticate('jwt', { session : false}), getMyLesson)

export default myShowuRouter