import express from "express";
import {
  seedSpaceData,
  getAllSpaces,
} from "../../controllers/reservation/spaceController.js";

const spaceRouter = express.Router();

spaceRouter.post("/seed", seedSpaceData); // 초기 데이터 삽입
spaceRouter.get("/", getAllSpaces); // 모든 Space 데이터 조회

export default spaceRouter;
