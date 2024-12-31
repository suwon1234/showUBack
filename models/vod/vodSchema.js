import { Schema,model } from "mongoose";

const vodSchema = new Schema({
  title: { type: String, required: true }, // 제목
  time: { type: String, required: true }, // 시간 정보
  genre: { type: String, required: true }, // 장르
  year: { type: String, required: true }, // 연도
  videoUrl: { type: String, required: true }, // 동영상 URL
  mainImage: { type: String, required: true }, // 메인 이미지 경로
  kind : {type: String,require:true}
}, { timestamps: true }); // 생성 및 수정 시간 자동 기록

export default model("VodVideo", vodSchema, "vodVideo");