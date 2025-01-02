import express from 'express';
import { getAllInquiries, seedInquiry } from '../../controller/shop/inquiryController.js';

const inquiryRouter = express.Router();

inquiryRouter.get("/list", getAllInquiries) // shop/md/inquiry/list
inquiryRouter.get("/seed", seedInquiry) // /shop/md/inquiry/seed


export default inquiryRouter;