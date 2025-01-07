import { model, Schema } from "mongoose";

const mdCartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  
  mdProduct: { type: Schema.Types.ObjectId, ref: 'Md', required: true },  
  price: { type: Number, required: true },  
  quantity: { type: Number, required: true, default: 1 }, 
  image: { type: String, required: true },  
  name: { type: String, required: true }, 
});

export default model("MdCart", mdCartSchema, "mdCart");