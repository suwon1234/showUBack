import express from "express";
import {
  addLike,
  removeLike,
  getLikes,
} from "../../controllers/reservation/likeController.js";

const likeRouter = express.Router();

likeRouter.post("/", addLike); // 좋아요 추가
likeRouter.delete("/", removeLike); // 좋아요 삭제
likeRouter.get("/", getLikes); // 모든 좋아요 조회

export default likeRouter;
