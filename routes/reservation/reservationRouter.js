import express from "express";
import eventsRouter from "./eventsRouter.js"; // eventsRouter 가져오기

const reservationRouter = express.Router();

reservationRouter.use("/", eventsRouter); // /reservation 경로에 이벤트 라우터 연결

export default reservationRouter;
