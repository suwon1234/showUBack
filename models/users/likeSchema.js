import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  user : { type : Schema.Types.ObjectId, ref:'User', required : true },
  teamMatching : { type : Schema.Types.ObjectId, ref : 'TeamMatching' }, //팀매칭
  lesson : { type : Schema.Types.ObjectId, ref : 'Lesson' }, //레슨
  space : { type : Schema.Types.ObjectId, ref : 'Space' }, //공간
  props : { type : Schema.Types.ObjectId, ref : 'Props' }, //소품
  ticket : { type : Schema.Types.ObjectId, ref : 'Ticket' }, //티켓
  md : { type : Schema.Types.ObjectId, ref : 'Md' }, //MD
  auction : { type : Schema.Types.ObjectId, ref : 'Auction' }, //경매
  createdAt : { type: String, default: getCurrentTime }
})

export default model("Like", likeSchema, "likes")