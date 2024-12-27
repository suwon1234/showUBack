import { Schema, model } from "mongoose";

const getCurrentTime = () => new Date().toISOString();

// Community 스키마
const communitySchema = new Schema({
  title: { type: String, required: true }, // 제목
  author: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 작성자 (User 참조)
  content: { type: String, required: true }, // 내용
  category: { 
    type: String, 
    enum: ["전체", "뮤지컬", "공연", "영화", "밴드", "연극"], // 카테고리 
    required: true 
  },
  likeCount: { type: Number, default: 0 }, // 좋아요 수
  file: { type: String }, // 파일 경로
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  updatedAt: { type: String, default: getCurrentTime }, // 업데이트 시간
});

export default model("Community", communitySchema, "communities");
