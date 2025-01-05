import express from "express";
import passport from "passport";
import { 
  getCommunityById, 
  getAllCommunities, 
  toggleLike,
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
} from "../../controller/community/writeController.js"

import newsRouter, {

} from "../community/newsRouter.js"


const communityRouter = express.Router();

// 커뮤니티 목록 조회
communityRouter.get('/', getAllCommunities); // community

// 커뮤니티 상세 정보 조회
communityRouter.get('/:id', getCommunityById); // community/:id

// 커뮤니티 상세 정보 조회 
// communityRouter.get('/communityInfo/:id', getCommunityById); // community/communityInfo/:id

// 댓글 추가
communityRouter.get("/:id/comments", getCommentsByPostId);
communityRouter.post("/:id/comments", passport.authenticate("jwt", { session: false }), addComment);

// 댓글 삭제
communityRouter.delete("/comments/:commentId", passport.authenticate("jwt", { session: false }), deleteComment);

// 좋아요 토글
communityRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), toggleLike);

// 글 작성
communityRouter.post('/create', createCommunityPost);

// 커뮤니티 글 가져오기
communityRouter.get('/all', getAllCommunityPosts);

// 파일 업로드
communityRouter.post("/upload", uploadFile); 

// 뉴스 라우터 연결
communityRouter.use("/newsMain", newsRouter); // /community/newsMain



export default communityRouter;
