import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  user : { type : Schema.Types.ObjectId, ref:'User', required : true },
  teamMatching : { type : Schema.Types.ObjectId, ref : 'TeamMatching', required : true }, //팀매칭
  lesson : { type : Schema.Types.ObjectId, ref : 'Lesson', required : true }, //레슨
  space : { type : Schema.Types.ObjectId, ref : 'Space', required : true }, //공간
  props : { type : Schema.Types.ObjectId, ref : 'Props', required : true }, //소품
  ticket : { type : Schema.Types.ObjectId, ref : 'Ticket', required : true }, //티켓
  md : { type : Schema.Types.ObjectId, ref : 'Md', required : true }, //MD
  auction : { type : Schema.Types.ObjectId, ref : 'Auction', required : true }, //경매
  createdAt : { type: String, default: getCurrentTime }
})

export default model("Like", likeSchema, "likes")