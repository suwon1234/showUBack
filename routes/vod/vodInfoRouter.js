import express from 'express'
import { getVodId } from '../../controller/vod/vodInfoController.js';

const vodInfoRouter=express.Router();


vodInfoRouter.get('/:id', getVodId); // /vod/play/:id

export default vodInfoRouter