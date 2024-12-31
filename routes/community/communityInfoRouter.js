import express from 'express';
import {
    getCommunityInfoById,
    addCommentToCommunityInfo,
    seedCommunityInfoData
} from '../../controller/community/communityInfoController.js';

const communityInfoRouter = express.Router();

// 시드 데이터 삽입
communityInfoRouter.get('/seed', seedCommunityInfoData); // /community/communityInfo/seed  시드 데이터 삽입용

// 커뮤니티 상세 정보
communityInfoRouter.get('/:id', getCommunityInfoById); // /community/communityInfo/:id
communityInfoRouter.post('/:id/comments', addCommentToCommunityInfo); // 댓글 추가


export default communityInfoRouter;
