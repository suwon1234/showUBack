import { model, Schema } from "mongoose";

const mdSchema = new Schema({
  productName: { type: String, required: true }, // 상품명
  category: { type: String, enum: ["전체", "뮤지컬", "영화", "연극"], required: true }, // 카테고리
  price: { type: Number, required: true }, // 상품 가격
  option: { type: String, required: true}, // 상품 옵션
  description: { type: String, required: true }, // 상품 설명
  isHearted: { type: Schema.Types.ObjectId, ref: 'Like', required: true, default: false}, // 찜
  image: { type: String, required: true },
  imageDetail: { type: String, required: true },
});

export default model("Md", mdSchema, "md");