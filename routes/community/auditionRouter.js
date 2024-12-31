import express from "express";
import { seedAuditionData, getAllAuditions } from "../../controller/audition/auditionController.js";

const auditionRouter = express.Router();

auditionRouter.get("/seed", seedAuditionData); // community/audition/seed
auditionRouter.get("/", getAllAuditions);

export default auditionRouter;
