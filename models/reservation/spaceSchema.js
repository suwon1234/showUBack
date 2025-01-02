import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils";

const spaceSchema = new Schema({
  id: { type: Number, required: true }, // 고유 ID
  name: { type: String, required: true }, // 공간 이름
  location: { type: String, required: true }, // 위치
  price: { type: String, required: true }, // 가격 (문자열)
  pricePerHour: { type: Number, required: true }, // 시간당 가격 (숫자형)
  pricePerDay: { type: Number, required: true }, // 하루 가격 (숫자형)
  img: { type: String, required: true }, // 이미지 URL
  description: { type: String, required: true }, // 설명
  amenities: [{ type: String, required: true }], // 편의시설
  additionalImages: [{ type: String }], // 추가 이미지 URL 배열
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Space", spaceSchema, "spaces");
