import { model, Schema } from "mongoose"

const inquirySchema = new Schema({
  type: { type: String, required: true }, // 문의 유형 (상품, 배송, 기타)
  title: { type: String, required: true }, 
  writer: { type: String, required: true }, 
  date: { type: String, required: true }, 
  content: { type: String, required: true } 
});


export default model("Inquiry", inquirySchema, "inquiry");