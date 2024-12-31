import express from 'express';
import { getAllCommunities, createCommunity,seedCommunityData,} from '../../controller/community/communityController.js';
import communityInfoRouter from './communityInfoRouter.js';
import commentRouter from './commentRouter.js';


const communityRouter = express.Router();

// 커뮤니티 메인
communityRouter.get('/', getAllCommunities); // /community
communityRouter.post('/create', createCommunity); // /community/create
communityRouter.get('/seed', seedCommunityData); // /community/seed

// 커뮤니티 인포 라우터
communityRouter.use('/communityInfo', communityInfoRouter);

// 커뮤니티 댓글 라우터
communityRouter.use("/comments", commentRouter);


export default communityRouter;
