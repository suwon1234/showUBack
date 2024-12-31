import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

// Audition 스키마 정의
const auditionSchema = new Schema({
  category: { type: String, enum: ["뮤지컬", "연극"], required: true }, // 카테고리 (뮤지컬, 연극)
  image: { type: String, required: true }, // 이미지 URL
  title: { type: String, required: true }, // 제목
  description: { type: String, required: true }, // 설명
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Audition", auditionSchema, "audition");
