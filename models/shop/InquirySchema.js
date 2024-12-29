import { model, Schema } from "mongoose"

const InquirySchema = new Schema(
  {
    id: { type: String, required: true, unique: true }, 
    type: { type: String, required: true },            
    title: { type: String, required: true },          
    writer: { type: String, required: true },          
    date: { type: String, required: true },           
    content: { type: String, required: true },         
  }
);

export default model("Inquiry", InquirySchema, "inquiry");