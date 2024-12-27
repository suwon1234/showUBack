import express from 'express';
import { getAllCommunities, createCommunity } from '../../controller/community/communityController.js';

const communityRouter = express.Router();

// 커뮤니티 게시물 전체 조회
communityRouter.get('/', getAllCommunities); // /community

// 커뮤니티 게시물 추가
communityRouter.post('/create', createCommunity); // /community/create

export default communityRouter;
