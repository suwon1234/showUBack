import express from 'express'
import passport from 'passport';
import {getlikestatus, getVodId, getVodLikes} from '../../controller/vod/vodInfoController.js';

const vodInfoRouter=express.Router();


vodInfoRouter.get('/:id', getVodId); // /vod/play/:id
vodInfoRouter.post('/:id/likes', passport.authenticate('jwt', { session: false }), getVodLikes);
vodInfoRouter.get('/:id/like/status',passport.authenticate('jwt', { session: false }), getlikestatus);

export default vodInfoRouter