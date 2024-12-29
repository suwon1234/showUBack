import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

// Community 스키마
const communitySchema = new Schema({
  title: { type: String, required: true },
  // content: { type: String, required: true },
  category: { type: String, enum: ["전체", "뮤지컬", "공연", "영화", "밴드", "연극"], required: true },
  likeCount: { type: Number, default: 0 },
  createdAt: { type: String, default: getCurrentTime },
  updatedAt: { type: String, default: getCurrentTime},
  imageUrl: { type: String },
});





export default model("Community", communitySchema, "communities");
