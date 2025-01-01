import { model, Schema } from "mongoose";



const vodShowuUploadSchema=new Schema({
  id : {type:Schema.Types.ObjectId, ref : 'video'}, // 비디오 ID
  title : {type:String,require:true}, //제목
  videoUrl : {type :String,require:true},//비디오 경로
  description : {type :String,require:true},//설명
  thumbnail : {type :String,require:true},//썸네일 경로
  category : {type :String,enmu :['음악','연기','영화','뮤지컬'],require:true},//카테고리
  element : {type :Number,require:true},//요소 (자막추가 최종화면 추가)
  copyright : {type : String,default : true},//저작권
  videostatus : {type : Number,default : nondisclosure},// 비공개 공개
  user :{type :String,require:true},// 영상을 올리는 유저의 정보
  createdAt: { type: String, default: getCurrentTime }, // 생성 시간 <==최신순
})

export default model("VodUpload",vodShowuUploadSchema,"vodupload")