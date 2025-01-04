import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

// Community 스키마
const communitySchema = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "User" }, // 글쓰기 작성자
  Writefile : { type: String, required: true }, // 글쓰기 파일
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, enum: ["전체", "뮤지컬", "공연", "영화", "밴드", "연극"], required: true },
  likeCount: { type: Number, default: 0 }, // 좋아요 카운트
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime},
  imageUrl: { type: String,  required: true },
  description: { type: String, required: true },
  likes: { type: Number, default: 0 }, // 좋아요 수
  likedUsers: [{ type: Schema.Types.ObjectId , ref : 'User'}], // 좋아요를 누른 사용자 ID 
});





export default model("Community", communitySchema, "communities");
