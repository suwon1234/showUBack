import express from 'express';
import { getMdProduct, getMdProductById, seedMdProducts } from '../../controller/shop/mdController.js';

const mdRouter = express.Router();

mdRouter.get("/", getMdProduct) // /shop/md (MdMain)
mdRouter.get("/detail/:id", getMdProductById) // /shop/md/detail/1 (MdDetail)
mdRouter.post("/cart", getMdProduct) // /shop/md/cart (MdCart)
mdRouter.post("/payment", getMdProduct) // /shop/md/payment (MdPayment)

mdRouter.get("/seed", seedMdProducts) // /shop/md/seed (데이터 삽입)


export default mdRouter;