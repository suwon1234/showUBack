import express from 'express';
import { get } from 'mongoose';
import { getLessonListData, getLessonListDetailsData, lessonList, } from '../../controller/showu/lessonController.js';


const showuRouter = express.Router()

showuRouter.get("/lesson", getLessonListData)
showuRouter.get("/details/:id", getLessonListDetailsData)

export default showuRouter 