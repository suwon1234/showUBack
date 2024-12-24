import { Schema, model } from "mongoose";

const communitySchema = new Schema({
    title : { type : String, required : true },
    author : { type : Schema.Types.ObjectId, ref : 'User' ,required : true },
    content : { type : String, required : true },
    category: { 
      type: String, 
      enum: ['전체', '뮤지컬', '공연', '영화', '밴드', '연극'],  // 드롭다운 선택 항목
      required: true 
    },
    likeCount : { type : Number, default : 0 },
    file : { type : String },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

export default model("Community", communitySchema, "community")