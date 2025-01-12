import multer from "multer";
import Community from "../../models/community/communitySchema.js";
import Write from "../../models/community/writeSchema.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 파일 크기 제한 설정
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// multer 설정
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const uploadPath = path.join(__dirname, "../../../uploads/communityWrites");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    callback(null, uploadPath);
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const fileFilter = (req, file, callback) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("이미지 파일만 업로드 가능합니다."));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});

// 파일 업로드 핸들러
const uploadFile = (req, res) => {
  const uploadMiddleware = upload.single("file");
  uploadMiddleware(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "첨부 파일은 최대 5MB까지 등록할 수 있습니다." });
      }
      return res.status(400).json({ message: err.message });
    } else if (err) {
      return res.status(400).json({ message: "파일 업로드에 실패했습니다.", error: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ message: "파일이 업로드되지 않았습니다." });
    }

    const fileUrl = `/uploads/communityWrites/${req.file.filename}`;
    res.status(200).json({ url: fileUrl });
  });
};

// 글 작성 핸들러
const createCommunityPost = async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "사용자가 인증되지 않았습니다." });
  }

  const { title, category, content, imageUrl } = req.body;

  if (!title || !category || !content) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const newPost = new Community({
      userId: req.user._id,
      title,
      category,
      content,
      imageUrl,
      createdAt: new Date().toISOString(),
    });

    await newPost.save();
    res.status(201).json({ message: "게시글이 작성되었습니다.", post: newPost });
  } catch (error) {
    console.error("게시글 작성 중 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

// 특정 글 조회 핸들러
const getCommunityPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Community.findById(id);
    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("특정 글 가져오기 오류:", error);
    res.status(500).json({ message: "글을 가져오는 데 실패했습니다." });
  }
};

// 모든 글 가져오기
const getAllCommunityPosts = async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  console.log("요청받은 페이지:", page);
  console.log("요청받은 제한:", limit);

  // 디버깅 로그 추가
  console.log("Query Parameters:", req.query);

  page = Math.max(parseInt(page), 1); // 최소 1 페이지
  limit = Math.min(Math.max(parseInt(limit), 1), 100); // 최소 1개, 최대 100개

  console.log(`Parsed Parameters - Page: ${page}, Limit: ${limit}`);

  try {
    const posts = await Community.find()
    console.log("게시물:", posts)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPosts = await Community.countDocuments();
    res.status(200).json({
      success: true,
      posts,
      totalPosts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ success: false, message: "Failed to fetch posts" });
  }
};




// 글 수정 핸들러
const updateCommunityPost = async (req, res) => {
  const { id } = req.params;
  const { title, category, content, imageUrl } = req.body;

  if (!title || !category || !content) {
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    const post = await Community.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { title, category, content, imageUrl },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }

    res.status(200).json({ message: "글이 수정되었습니다.", post });
  } catch (error) {
    console.error("글 수정 중 오류:", error);
    res.status(500).json({ message: "글 수정 중 오류가 발생했습니다." });
  }
};

// 글 삭제 핸들러
const deleteCommunityPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Community.findOneAndDelete({ _id: id, userId: req.user._id });
    if (!post) {
      return res.status(404).json({ message: "글을 찾을 수 없습니다." });
    }

    res.status(200).json({ message: "글이 삭제되었습니다." });
  } catch (error) {
    console.error("글 삭제 중 오류:", error);
    res.status(500).json({ message: "글 삭제 중 오류가 발생했습니다." });
  }
};

export {
  createCommunityPost,
  getAllCommunityPosts,
  getCommunityPostById,
  updateCommunityPost,
  deleteCommunityPost,
  uploadFile,
};
