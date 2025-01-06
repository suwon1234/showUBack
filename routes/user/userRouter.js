import express from 'express';
import { register, login, remove, modify, upgrade, modifyUpdate, upgradeInfo, findId, UpgradeAllData, approveRequests, adminLogin, updatePicture } from '../../controller/user/userController.js';
import passport from 'passport';

const userRouter = express.Router()

//회원가입
userRouter.post("/register", register)
//로그인
userRouter.post("/login", login)
//회원정보 수정
userRouter.put("/modify", passport.authenticate('jwt', { session: false }), modify)
//회원탈퇴
userRouter.delete("/remove", passport.authenticate('jwt', { session: false }), remove)

//아이디 찾기
userRouter.post("/find-id", findId)

// 등급업 신청
userRouter.post("/upgrade", passport.authenticate('jwt', { session: false }), upgrade)
userRouter.get("/upgrade/:id", passport.authenticate('jwt', { session: false }), upgradeInfo)
// 등급업 수정
userRouter.put("/upgrade/modify/:id", modifyUpdate)

// 관리자 로그인
userRouter.post("/admin/login", adminLogin)
// 등급업 신청 내역 불러오기
userRouter.get("/admin/all-data", passport.authenticate('jwt', { session: false }), UpgradeAllData)
// 등급업 승인 (관리자)
userRouter.put("/admin/approve-requests/:requestId", passport.authenticate('jwt', { session: false }), approveRequests)

// 프로필 변경
userRouter.post("/picture", passport.authenticate('jwt', { session: false }), updatePicture)

export default userRouter