import express from 'express';
import passport from 'passport';
import { getMainLesson } from '../../controller/mypage/mainController.js';

const mainRouter = express.Router();

mainRouter.get("/lesson", getMainLesson)

export default mainRouter;