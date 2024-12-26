import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // 사용자 ID
  postId: { type: Schema.Types.ObjectId, ref: 'Community', required: true }, // 게시물 ID
  content: { type: String, required: true }, // 댓글 내용
  createdAt: { type: Date, default: Date.now }, // 생성 시간
  updatedAt: { type: Date, default: Date.now }, // 업데이트 시간
});

export default model('Comment', commentSchema, 'comments');