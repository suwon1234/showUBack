import { model, Schema } from "mongoose"

const RefundSchema = new Schema();

export default model("Refund", RefundSchema, "refund");