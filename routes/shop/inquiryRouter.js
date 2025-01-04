import express from 'express';
import passport from 'passport'
import { createInquiry, getInquiryList, getInquiryDetail, updateInquiry, deleteInquiry } from '../../controller/shop/inquiryController.js';

const inquiryRouter = express.Router();
const authenticateJWT = passport.authenticate('jwt', { session: false });

inquiryRouter.post('/', createInquiry) // 문의 내역 작성
inquiryRouter.get('/list', getInquiryList) // 문의 목록
inquiryRouter.get('/:id', getInquiryDetail) // 문의 상세 내역
inquiryRouter.put('/:id', updateInquiry) // 문의 내역 수정
inquiryRouter.delete('/:id', deleteInquiry) // 문의 내역 삭제

// inquiryRouter.post('/', authenticateJWT, createInquiry)
// inquiryRouter.get("/list", getAllInquiries) // shop/md/inquiry/list


export default inquiryRouter;