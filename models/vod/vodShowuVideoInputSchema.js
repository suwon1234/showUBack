import { Schema,model } from "mongoose";


const vodShowuVideoInputSchema = new Schema({
  usersId : {type : String,require:true}, // 사용자 ID 누가 댓글을 달았는지 보기 위해
  usersComment : {type :String,require:true}, // 사용자들의 글
  myComment : {type : String,require:true}, // 내가 쓴 글
  myChoice : {type:String,require:true}, // 내가 관심을 누른 영상
  myChoicemanImage : {type:String,require:true},// 관심을 누른 영상의 썸네일
  vodUser : {type :String,require:true}, //영상을 올린 유저
})

export default model("VodInput",vodShowuVideoInputSchema,"vodinput")