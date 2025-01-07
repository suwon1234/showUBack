import express from "express";
import passport from "passport";
import { 
  getCommunityById, 
  getAllCommunities, 
  toggleLike,
  deleteCommunityPost,
  updateCommunityPost,
} from "../../controller/community/communityController.js";

import { 
  addComment, 
  deleteComment, 
  getCommentsByPostId 
} from "../../controller/community/commentController.js";

import { 
  createCommunityPost, 
  getAllCommunityPosts, 
  uploadFile 
} from "../../controller/community/writeController.js";

import newsRouter from "../community/newsRouter.js";

const communityRouter = express.Router();

// 커뮤니티 라우터
communityRouter.get("/", getAllCommunities);
communityRouter.get("/:id/comments", getCommentsByPostId);

communityRouter.post("/:id/comments", passport.authenticate("jwt", { session: false }), addComment);

communityRouter.delete("/comments/:commentId", passport.authenticate("jwt", { session: false }), deleteComment);

communityRouter.post("/:id/likes", passport.authenticate("jwt", { session: false }), toggleLike);
communityRouter.post("/create", passport.authenticate("jwt", { session: false }), createCommunityPost);

communityRouter.get("/all", getAllCommunityPosts);

communityRouter.delete("/delete/:id", passport.authenticate("jwt", { session: false }), deleteCommunityPost);

communityRouter.put("/update/:id", passport.authenticate("jwt", { session: false }), updateCommunityPost);

communityRouter.get("/post/:id", passport.authenticate("jwt", { session: false }), getCommunityById);

communityRouter.post("/upload", uploadFile);

// 뉴스 라우터 연결
communityRouter.use("/newsMain", newsRouter);


// 커뮤니티 상세 정보 조회
communityRouter.get('/:id', getCommunityById); // community/:id

// 파일 업로드
communityRouter.post("/upload", uploadFile); 







export default communityRouter;

