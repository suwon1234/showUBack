import { model, Schema } from "mongoose";

const mdSchema = new Schema({
  id: { type: String, required: true, unique: true }, 
  category: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true }, 
  image: { type: String, required: true },
  image_detail: { type: String, required: true },
  description: { type: String, required: true },
  ishearted: {type: Boolean, required: true, default: false}
});

export default model("Md", mdSchema, "md");