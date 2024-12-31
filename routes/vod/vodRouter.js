import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors'
import { getAllVideo } from '../../controller/vod/vodController.js';
import vodInfoRouter from './vodInfoRouter.js';



const vodRouter = express.Router();



vodRouter.get('/', getAllVideo);
vodRouter.use('/info',vodInfoRouter);




export default vodRouter;
