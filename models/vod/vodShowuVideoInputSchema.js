import { Schema,model } from "mongoose";


const vodShowuVideoInputSchema = new Schema({
  videoID : {type : Schema.Types.ObjectId, ref : 'vodinput'}, //해당 영상의 ID
  usersId :{type : String,require:true}, // 사용자 ID 누가 댓글을 달았는지 보기 위해
  myComment : {type : String,require:true}, // 내가 쓴 글
  createdAt: { type: String, default: getCurrentTime }, // 댓글 생성 시간
  opponentId : {type: Schema.Types.ObjectId , ref : 'opponent'}, // 사용자들
  opponentComment : {type : String,require:true}, // ㄴ사용자들 글
  myChoice : {type:String,require:true}, // 내가 관심을 누른 영상
  myChoicemanImage : {type:String,require:true},// 관심을 누른 영상의 썸네일
})

export default model("VodInput",vodShowuVideoInputSchema,"vodinput")