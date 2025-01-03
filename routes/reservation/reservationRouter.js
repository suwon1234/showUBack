import express from "express";
import {
  addReservation,
  getReservedSpaces,
  getReservedShows,
  getAllReservations,
} from "../../controllers/reservation/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/add", addReservation); // 결제 내역 저장
reservationRouter.get("/reserved-spaces/:userId", getReservedSpaces); // 유저가 결제한 공간 내역 조회
reservationRouter.get("/reserved-shows/:userId", getReservedShows); // 유저가 결제한 공연 내역 조회
reservationRouter.get("/all", getAllReservations); // 모든 예약 내역 조회

export default reservationRouter;
