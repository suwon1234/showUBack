import express from 'express';
import passport from 'passport';
import { getTickets, getTicketsDetail } from '../../controller/mypage/myReservationController.js';

const myReservationRouter = express.Router()

// 티켓 예매 내역 '/my/reservation/ticket'
myReservationRouter.get("/ticket", passport.authenticate('jwt', { session: false }), getTickets)

// 티켓 예매 내역 '/my/reservation/ticket/:id'
myReservationRouter.get("/ticket/:id", passport.authenticate('jwt', { session: false }), getTicketsDetail)


export default myReservationRouter