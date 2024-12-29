import { model, Schema } from "mongoose"

const MdProductSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },            
    price: { type: Number, required: true },          
    images: { type: String, required: true },
  }
);

export default model("MdProduct", MdProductSchema, "mdproduct");