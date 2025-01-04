import express from 'express';
import passport from 'passport';
import { likeAuction, likeMd, likeSpace } from '../../controller/mypage/likeController.js';

const likeRouter = express.Router()

// 찜-MD '/my/like/md'
likeRouter.get("/md", passport.authenticate('jwt', { session: false }), likeMd)
// 찜-경매 '/my/like/auction'
likeRouter.get("/auction", passport.authenticate('jwt', { session : false }), likeAuction)
// 찜-공간대여 '/my/like/space'
likeRouter.get("/space", passport.authenticate('jwt', { session : false }), likeSpace)

export default likeRouter