import express from "express";
import passport from "passport"; // passport import
import { 
  createCommunityPost, 
  getAllCommunityPosts, 
  uploadFile,
} from "../controllers/writeController.js";

const router = express.Router();

// 파일 업로드
router.post("/upload", uploadFile);

// 글 작성 
// router.post("/create", passport.authenticate("jwt", { session: false }), createCommunityPost);
router.post(
    "/community/create",
    (req, res, next) => {
      passport.authenticate("jwt", { session: false }, (err, user, info) => {
        console.log("Passport Auth Error:", err);
        console.log("Passport Auth User:", user);
        console.log("Passport Auth Info:", info);
  
        if (err) {
          return res.status(500).json({ message: "서버 오류" });
        }
        if (!user) {
          return res.status(401).json({ message: "사용자가 인증되지 않았습니다." });
        }
        req.user = user;
        next();
      })(req, res, next);
    },
    createCommunityPost
  );

// 글 목록 조회 
router.get("/posts", getAllCommunityPosts);


export default router;
