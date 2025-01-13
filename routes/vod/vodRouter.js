import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors'
import { getAllVideo, getShowuVideo } from '../../controller/vod/vodController.js';
import vodInfoRouter from './vodInfoRouter.js';



const vodRouter = express.Router();



vodRouter.get('/', getAllVideo);
vodRouter.get('/showuvideo',getShowuVideo)


vodRouter.use('/info',vodInfoRouter);
vodRouter.use('/showuinfo',vodInfoRouter)




export default vodRouter;
