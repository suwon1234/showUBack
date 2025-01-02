import express from 'express';
import passport from 'passport';
import { 
    getCommunityById, 
    addCommentToCommunity, 
    toggleLike, 
    getAllCommunities  // 커뮤니티 목록을 반환하는 함수
} from "../../controller/community/communityInfoController.js";

import {
  seedCommunityData 
} from "../../controller/community/communityController.js";

const communityRouter = express.Router();

// 커뮤니티 인포 시드 데이터 삽입
communityRouter.get('/seed', seedCommunityData); // /community/seed

// 커뮤니티 목록 조회 (GET /community)
communityRouter.get('/', getAllCommunities); // 커뮤니티 목록 조회

// 커뮤니티 상세 정보 조회 (GET /community/:id)
communityRouter.get('/:id', getCommunityById); // /community/:id

// 댓글 추가 (POST /community/:id/comments)
communityRouter.post('/:id/comments', passport.authenticate('jwt', { session: false }), addCommentToCommunity);

// 좋아요 토글 (POST /community/:id/likes)
communityRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), toggleLike);

export default communityRouter;
