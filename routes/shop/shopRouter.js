import express from 'express';
import mdRouter from './mdRouter.js';
import inquiryRouter from './inquiryRouter.js';
import auctionRouter from './auctionRouter.js';
import paymentRouter from './paymentRouter.js';
import cartRouter from './cartRouter.js';

const shopRouter = express.Router();

shopRouter.use("/md", mdRouter); // /shop/md
shopRouter.use("/md/inquiry", inquiryRouter); //shop/md/inquiry
shopRouter.use("/md/cart", cartRouter) // shop/md/cart 
shopRouter.use("/md/payment", paymentRouter); //shop/md/payment
shopRouter.use("/auction", auctionRouter); // /shop/auction


export default shopRouter;