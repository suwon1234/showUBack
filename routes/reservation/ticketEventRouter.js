import express from "express";
import {
  seedTicketEventData,
  getAllTicketEvents,
} from "../../controllers/reservation/ticketEventController.js";

const ticketEventRouter = express.Router();

ticketEventRouter.post("/seed", seedTicketEventData); // 초기 데이터 삽입
ticketEventRouter.get("/", getAllTicketEvents); // 모든 TicketEvent 데이터 조회

export default ticketEventRouter;
