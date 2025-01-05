import express from 'express'
import passport from 'passport';
import { getVodId, getVodLikes } from '../../controller/vod/vodInfoController.js';

const vodInfoRouter=express.Router();


vodInfoRouter.get('/:id', getVodId); // /vod/play/:id
vodInfoRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), getVodLikes);
export default vodInfoRouter