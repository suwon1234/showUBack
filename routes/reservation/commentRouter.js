import express from "express";
import {
  addComment,
  updateComment,
  deleteComment,
  getComments,
} from "../../controllers/reservation/commentController.js";

const commentRouter = express.Router();

commentRouter.post("/", addComment); // 댓글 추가
commentRouter.put("/", updateComment); // 댓글 수정
commentRouter.delete("/", deleteComment); // 댓글 삭제
commentRouter.get("/", getComments); // 모든 댓글 조회

export default commentRouter;
