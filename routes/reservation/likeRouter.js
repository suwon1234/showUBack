import express from "express";
import {
  addLike,
  removeLike,
  getLikeCount,
  getLikedSpaces,
  getLikedShows,
} from "../../controllers/reservation/likeController.js";

const likeRouter = express.Router();

likeRouter.post("/add", addLike); // 좋아요 추가
likeRouter.post("/remove", removeLike); // 좋아요 취소
likeRouter.get("/:itemId/:itemType", getLikeCount); // 좋아요 개수 조회
likeRouter.get("/liked-spaces/:userId", getLikedSpaces); // 유저가 찜한 공간 조회
likeRouter.get("/liked-shows/:userId", getLikedShows); // 유저가 찜한 공연 조회

export default likeRouter;
