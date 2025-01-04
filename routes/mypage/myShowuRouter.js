import express from 'express';
import passport from 'passport';
import { getMyLesson, getMyTeamMatching } from '../../controller/mypage/myShowuController.js';

const myShowuRouter = express.Router()

// 팀매칭 목록 내역 '/my/showu/matching'
myShowuRouter.get("/matching", passport.authenticate('jwt', { session: false }), getMyTeamMatching)

// 개설한 레슨 목록 내역 '/my/showu/lesson'
myShowuRouter.get("/lesson", passport.authenticate('jwt', { session : false}), getMyLesson)

// 레슨 상담 내역 '/my/showu/reservation'
myShowuRouter.get("/reservation", passport.authenticate('jwt', { session : false}), getlessonreservation)

export default myShowuRouter