import express from 'express';
import mdRouter from './mdRouter.js';
// import inquiryRouter from './inquiryRouter.js';
import auctionRouter from './auctionRouter.js';
import paymentRouter from './paymentRouter.js';
// import cartRouter from './mdCartRouter.js';
import mdCartRouter from './mdCartRouter.js';
import mdInquiryRouter from './mdInquiryRouter.js';

const shopRouter = express.Router();

shopRouter.use("/md", mdRouter); // /shop/md
shopRouter.use("/md/inquiry", mdInquiryRouter); //shop/md/inquiry
shopRouter.use("/md/cart", mdCartRouter) // shop/md/cart 
shopRouter.use("/md/payment", paymentRouter); //shop/md/payment
shopRouter.use("/auction", auctionRouter); // /shop/auction


export default shopRouter;