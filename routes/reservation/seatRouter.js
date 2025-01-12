import express from "express";
import {
  getReservedSeats,
  getAvailableSeats,
} from "../../controller/reservation/seatController.js";

const router = express.Router();

router.get("/reservedSeats", getReservedSeats);
router.get("/availableSeats", getAvailableSeats);

export default router;
