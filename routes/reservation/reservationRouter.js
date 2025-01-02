import express from "express";
import {
  seedReservationData,
  getAllReservations,
} from "../../controller/reservation/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/seed", seedReservationData); // 초기 데이터 삽입
reservationRouter.get("/", getAllReservations); // 모든 Reservation 데이터 조회
// push 위한 변경처리용

export default reservationRouter;
