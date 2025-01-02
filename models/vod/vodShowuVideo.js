import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";




// 통합된 스키마
const vodShowuVideoSchema = new Schema({
  title: { type: String, required: true }, // 제목
  videoUrl: { type: String, required: true }, // 비디오 경로
  description: { type: String, required: true }, // 설명
  thumbnail: { type: String, required: true }, // 썸네일 경로
  category: { type: String, enum: ['음악', '연기', '영화', '뮤지컬'], required: true }, // 카테고리
  element: { type: Number, required: true }, // 요소 (자막추가, 최종화면 추가)
  copyright: { type: String, default: true }, // 저작권
  videostatus: { type: Number, default: 0 }, // 비공개/공개 상태
  user: { type: String, required: true }, // 영상을 올리는 유저 정보
  vodUser: { type: String, required: true }, // 영상을 올린 유저 (ShowuVideo에서 중복됨)
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간
  likes: { type: Number, default: 0 }, // 관심 수
  likedUsers: { type: Schema.Types.ObjectId, ref: 'User' }, // 좋아요를 누른 사용자 ID
  time: { type: String, required: true }, // 시간 정보
  genre: { type: String, required: true }, // 장르
  year: { type: String, required: true }, // 연도
  mainImage: { type: String, required: true }, // 메인 이미지 경로
  createdAt: { type: String, default: getCurrentTime } // 생성시간
}, { timestamps: true }); // 생성 및 수정 시간 자동 기록

export default model("VodShowuVideo", vodShowuVideoSchema, "vodshowuvideo");
