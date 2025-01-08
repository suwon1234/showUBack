import express from "express";
import {
  getTicketEventById,
  getAllTicketEvents,
  getAllShows,
  getAllSpaces,
} from "../../controllers/reservation/eventsController.js";

const router = express.Router();

router.get("/ticketEvents/:id", getTicketEventById);
router.get("/ticketEvents", getAllTicketEvents);
router.get("/performingShows", getAllShows);
router.get("/spaces", getAllSpaces);

export default router;
