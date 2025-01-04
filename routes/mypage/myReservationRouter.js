import express from 'express';
import passport from 'passport';
import { getTickets } from '../../controller/mypage/myReservationController.js';

const myReservationRouter = express.Router()

// 티켓 예매 내역 '/my/reservation/ticket'
myReservationRouter.get("/ticket", passport.authenticate('jwt', { session: false }), getTickets)

export default myReservationRouter