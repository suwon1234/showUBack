import { model, Schema } from "mongoose";

// 현재 시간 가져오는 함수
const getCurrentTime = () => {
  return new Date().toISOString();
};

const showSchema = new Schema({
  id: { type: Number, required: true }, // 고유 ID
  name: { type: String, required: true }, // 공연 이름
  venue: { type: String, required: true }, // 공연 장소
  dates: { type: String, required: true }, // 공연 날짜 범위
  duration: { type: String, required: true }, // 공연 시간
  grade: { type: String, required: true }, // 관람 등급
  price: {
    R: { type: String, required: true }, // R석 가격
    S: { type: String, required: true }, // S석 가격
  },
  discounts: [{ type: String, required: true }], // 할인 정보
  img: { type: String, required: true }, // 이미지 URL
  cast: [
    {
      name: { type: String, required: true }, // 배우 이름
      img: { type: String, required: true }, // 배우 이미지 URL
    },
  ], // 출연 배우 정보
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 수정 시간
});

export default model("Show", showSchema, "show");
