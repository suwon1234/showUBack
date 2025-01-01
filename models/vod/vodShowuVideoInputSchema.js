import { Schema,model } from "mongoose";


const vodShowuVideoInputSchema = new Schema({
  videoID : {type : Schema.Types.ObjectId, ref : 'vodinput'}, //해당 영상의 ID
  usersId :{type : String,require:true}, // 사용자 ID 누가 댓글을 달았는지 보기 위해
  usersComment : {type :String,require:true}, // 사용자들의 글
  myComment : {type : String,require:true}, // 내가 쓴 글
  myChoice : {type:String,default : 0}, // 관심 수
  likedUsers: { type: Schema.Types.ObjectId , ref : 'User'}, // 관심을 누른 유저
  myChoicemanImage : {type:String,require:true},// 관심을 누른 영상의 썸네일
  vodUser : {type :String,require:true}, //영상을 올린 유저
  createdAt: [{ type: String, default: getCurrentTime }], // 댓글 생성 시간
})

export default model("VodInput",vodShowuVideoInputSchema,"vodinput")