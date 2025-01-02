import express from 'express';
import passport from 'passport';
import { 
    getCommunityById, 
    addCommentToCommunity, 
    toggleLike, 
} from "../../controller/community/communityInfoController.js";

const communityInfoRouter = express.Router();



// 커뮤니티 상세 정보 조회
communityInfoRouter.get('/:id', getCommunityById); // /community/info/:id

// 댓글 추가
communityInfoRouter.post('/:id/comments', passport.authenticate('jwt', { session: false }), addCommentToCommunity); // /community/info/:id/comments

// 좋아요 토글
communityInfoRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), toggleLike); // /community/info/:id/likes

export default communityInfoRouter;
