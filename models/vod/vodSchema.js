import { Schema,model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const vodSchema = new Schema({
  id : {type:Schema.Types.ObjectId, ref : 'vodvideo'}, // 비디오 ID
  title: { type: String, required: true }, // 제목
  time: { type: String, required: true }, // 시간 정보
  genre: { type: String, required: true}, // 장르
  year: { type: String, required: true }, // 연도
  videoUrl: { type: String, required: true }, // 동영상 URL
  mainImage: { type: String, required: true }, // 메인 이미지 경로
  category : {type: String,require:true,enum : ['음악','뮤지컬','영화']}, // 음악 , 뮤지컬 , 영화
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간 <==최신순
  like : {type :String,require:true}, // 좋아요 수 <==인기순 
  likedUsers: { type: Schema.Types.ObjectId , ref : 'User'}, // 좋아요를 누른 사용자 ID 
}, { timestamps: true }); // 생성 및 수정 시간 자동 기록

export default model("VodVideo", vodSchema, "vodVideo");