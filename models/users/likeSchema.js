import { Schema, model } from "mongoose";

const likeSchema = new Schema({
  user : { type : Schema.Types.ObjectId, ref:'User', required : true },
  likedTeamMatching : { type : Schema.Types.ObjectId, ref : 'TeamMatching' }, //팀매칭
  likedLesson : { type : Schema.Types.ObjectId, ref : 'Lesson' }, //레슨
  likedSpace : { type : Schema.Types.ObjectId, ref : 'Space' }, //공간
  likedProps : { type : Schema.Types.ObjectId, ref : 'Props' }, //소품
  likedTicket : { type : Schema.Types.ObjectId, ref : 'Ticket' }, //티켓
  likedMd : { type : Schema.Types.ObjectId, ref : 'Md' }, //MD
  likedAuction : { type : Schema.Types.ObjectId, ref : 'Auction' }, //경매
})

export default model("Like", likeSchema, "likes")