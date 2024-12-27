import express from 'express';
import { getAllCommunities, createCommunity, modifyCommunity, removeCommunity } from '../../controller/community/communityController.js';

const communityRouter = express.Router();

communityRouter.get('/communities', getAllCommunities);
communityRouter.post('/communities', createCommunity);
communityRouter.put('/communities/:id', modifyCommunity);
communityRouter.delete('/communities/:id', removeCommunity);

export default communityRouter;