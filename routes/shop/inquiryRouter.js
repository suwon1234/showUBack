import express from 'express';
import { getInquiry, seedInquiry } from '../../controller/shop/inquiryController.js';

const inquiryRouter = express.Router();

inquiryRouter.get("/list", getInquiry) // shop/md/inquiry/list
inquiryRouter.get("/seed", seedInquiry) // /shop/md/inquiry/seed


export default inquiryRouter;