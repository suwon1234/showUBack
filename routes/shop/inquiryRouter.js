import express from 'express';
import { createInquiry, getInquiryList } from '../../controller/shop/inquiryController.js';

const inquiryRouter = express.Router();

inquiryRouter.post('/', createInquiry)
inquiryRouter.get('/list', getInquiryList)
// inquiryRouter.get("/list", getAllInquiries) // shop/md/inquiry/list


export default inquiryRouter;