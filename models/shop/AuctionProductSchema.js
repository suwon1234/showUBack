import { model, Schema } from "mongoose"

const AuctionProductSchema = new Schema(
  {
    id: { type: String, required: true, unique: true }, 
    name: { type: String, required: true },            
    number: { type: String, required: true },          
    time: { type: String, required: true },            
    image: { type: String, required: true },           
  }
);

export default model("AuctionProduct", AuctionProductSchema, "auctionproduct");