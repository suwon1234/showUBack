import express from 'express';
import passport from 'passport';
import { getMyTeamMatching } from '../../controller/mypage/myShowuController.js';

const myShowuRouter = express.Router()

// 팀매칭 목록 내역 '/my/myTeam/matching'
myShowuRouter.get("/matching", passport.authenticate('jwt', { session: false }), getMyTeamMatching)

export default myShowuRouter