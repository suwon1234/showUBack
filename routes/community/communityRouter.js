import express from 'express';
import passport from 'passport';
import { 
  getCommunityById, 
  addCommentToCommunity, 
  toggleLike, 
  getAllCommunities 
} from "../../controller/community/communityController.js";

const communityRouter = express.Router();

// 커뮤니티 목록 조회
communityRouter.get('/', getAllCommunities); // community

// 커뮤니티 상세 정보 조회
communityRouter.get('/:id', getCommunityById); // community/:id

// 커뮤니티 상세 정보 조회 
// communityRouter.get('/communityInfo/:id', getCommunityById); // community/communityInfo/:id

// 댓글 추가
communityRouter.post('/:id/comments', passport.authenticate('jwt', { session: false }), addCommentToCommunity);

// 좋아요 토글
communityRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), toggleLike);



export default communityRouter;
