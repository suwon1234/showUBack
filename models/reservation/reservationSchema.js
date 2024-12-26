import { model, Schema } from "mongoose";

const reservationSchema = new Schema();

export default model("Reservation", reservationSchema, "reservation");