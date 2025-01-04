import express from 'express';
import { getMdProduct, getMdProductById } from '../../controller/shop/mdController.js';

const mdRouter = express.Router();

mdRouter.get("/", getMdProduct) // /shop/md (MdMain)
mdRouter.get("/detail/:id", getMdProductById) // /shop/md/detail/1 (MdDetail)
mdRouter.post("/cart", getMdProduct) // /shop/md/cart (MdCart)
mdRouter.post("/payment", getMdProduct) // /shop/md/payment (MdPayment)



export default mdRouter;