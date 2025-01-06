// import { Schema, model } from "mongoose";
// import { getCurrentTime } from "../../utils/utils.js";

// const writeSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // 작성자 ID
//   writeFile: { type: String }, // 파일 첨부 (선택적)
//   title: { type: String, required: true }, // 제목
//   content: { type: String, required: true }, // 내용
//   category: { 
//     type: String, 
//     enum: ["전체", "뮤지컬", "공연", "영화", "밴드", "연극"], 
//     required: true 
//   },
//   writeFile: { type: String }, // 파일 URL 저장
//   createdAt: { type: String, default: getCurrentTime }, // 생성 시간
//   updatedAt: { type: String, default: getCurrentTime }, // 업데이트 시간
// });

// export default model("Write", writeSchema, "writes");

import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const writeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  content: { type: String, required: true },
  writeFile: { type: String }, // 첨부 파일 URL
  createdAt: { type: Date, default: Date.now },
});


export default model("Write", writeSchema, "writes");