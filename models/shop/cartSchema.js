import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils";

const cartSchema = new Schema({
  userId: {
    email: { type: String, required : true, unique : true },
    password: { type: String },
  },
  product: {
      // id: { type: Schema.Types.ObjectId, ref: "Md", required: true }, 
      name: { type: String, ref: "Md", required: true },
      price: { type: Number, ref: "Md", required: true }, 
      // option: { type: String, ref: "Md" },
      quantity: { type: Number, required: true, default: 1 }, 
  }
});

export default model("Cart", cartSchema, "cart")