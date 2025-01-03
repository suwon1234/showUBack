import express from 'express';
import passport from 'passport';
import { myActivePost, likeMd, likeAuction } from '../../controller/mypage/mypageController.js';


const mypageRouter = express.Router()


// 커뮤니티 작성한 글 목록 
mypageRouter.post("/my-active/post/:id", passport.authenticate('jwt', { session: false }), myActivePost)

// 찜-MD
mypageRouter.get("/like/md", passport.authenticate('jwt', { session: false }), likeMd)
// 찜-경매
mypageRouter.get("/like/auction", passport.authenticate('jwt', { session : false }), likeAuction)


export default mypageRouter