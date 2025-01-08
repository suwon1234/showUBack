import express from 'express';
import passport from 'passport';
import path from 'path';
import { uploadFiles } from '../../controller/mypage/myUpgradeController.js';
import { createMulter } from '../../multerConfig.js';

const myUpgradeRouter = express.Router();

// 업로드 경로 설정
const uploadFolder = path.resolve('./uploads/upGradeFiles');

// Multer 미들웨어 생성
const uploadMiddleware = createMulter(uploadFolder).single('file');

// 등급업 신청 파일 첨부
myUpgradeRouter.post("/files", passport.authenticate('jwt', { session: false }), uploadMiddleware,  uploadFiles)

export default myUpgradeRouter;