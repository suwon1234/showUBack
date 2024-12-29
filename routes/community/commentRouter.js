import express from 'express';
import { addComment, getCommentsByPostId, deleteComment } from "../../controller/community/commentController.js";

const commentRouter = express.Router();

// 댓글 추가
commentRouter.post("/", addComment);

// 게시물 댓글 조회
commentRouter.get("/:postId", getCommentsByPostId);

// 댓글 삭제
commentRouter.delete("/:commentId", deleteComment);

export default commentRouter;