import express from "express";
import {
  seedShowData,
  getAllShows,
} from "../../controllers/reservation/showController.js";

const showRouter = express.Router();

showRouter.post("/seed", seedShowData); // 초기 데이터 삽입
showRouter.get("/", getAllShows); // 모든 Show 데이터 조회

export default showRouter;
