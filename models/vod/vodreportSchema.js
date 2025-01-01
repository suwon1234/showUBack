import { Schema,model } from "mongoose";


const vodReportSchema=new Schema({
  user : {type:String,require : true}, //신고자
  reportuser : {type :String,require:true}, // 신고할 사람
  reportComment : {type:Number,require:true}, // 신고내용
  reportamount : {type :Number,default : 0}, // 신고 누적 양
})

export default model("VodReport",vodReportSchema,"vodreport")