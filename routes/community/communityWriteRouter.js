import express from "express";
import passport from "passport";
import {
  createCommunityPost,
  getAllCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
  uploadFile,
} from "../controllers/writeController.js";

const router = express.Router();

// 파일 업로드 라우트
router.post("/upload", uploadFile);

// 커뮤니티 글 작성 
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  createCommunityPost
);

// 커뮤니티 글 목록 조회
router.get("/posts", getAllCommunityPosts);

// 특정 커뮤니티 글 조회
router.get(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  getCommunityPostById
);

// 커뮤니티 글 수정
router.put(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  updateCommunityPost
);

// 커뮤니티 글 삭제
router.delete(
  "/posts/:id",
  passport.authenticate("jwt", { session: false }),
  deleteCommunityPost
);

export default router;
