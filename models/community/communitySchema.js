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

const communitiesSchema = new Schema(
  {
      id: 1,
      title: "타이틀1",
      category: "뮤지컬",
      description: "설명1",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/kingkyboots-musical-ko-001-06.jpg?v=1732606423", 
  },
  {
    id: 2,
    title: "타이틀2",
    category: "공연",
    description: "설명2",
    imageUrl: "https://www.sac.or.kr//site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d", 
  },

)

export default model("Community", communitySchema, "communities")