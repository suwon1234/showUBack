import express from "express";
import { toggleLike } from "../../controller/reservation/likeController.js";
import passport from "passport";

const likeRouter = express.Router();

likeRouter.post(
  "/performingShows/:id/likes",
  passport.authenticate("jwt", { session: false }),
  toggleLike
);

export default likeRouter;
