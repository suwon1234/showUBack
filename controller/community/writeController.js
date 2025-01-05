import multer from "multer";
import Community from "../../models/community/communitySchema.js";

// 파일 크기 제한
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// multer 설정
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/'); // 파일 저장 경로
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    callback(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// 파일 필터 (이미지 파일만 허용)
const fileFilter = (req, file, callback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true); // 허용된 파일
  } else {
    callback(new Error('이미지 파일만 업로드 가능합니다.')); // 에러 처리
  }
};

// multer 업로드
const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE }, // 파일 크기 제한
  fileFilter,
});

// 파일 업로드
const uploadFile = (req, res) => {
    const uploadMiddleware = upload.single("file");
  
    uploadMiddleware(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ message: "첨부 파일은 최대 5MB까지 등록할 수 있습니다." });
        }
        return res.status(400).json({ message: err.message });
      } else if (err) {
        return res.status(400).json({ message: "파일 업로드에 실패했습니다." });
      }
  
      if (!req.file) {
        return res.status(400).json({ message: "파일이 업로드되지 않았습니다." });
      }
  
      // 업로드된 파일 URL 반환
      const fileUrl = `/uploads/${req.file.filename}`;
      res.status(200).json({ url: fileUrl });
    });
  };
  



// 커뮤니티 글 작성
const createCommunityPost = async (req, res) => {
  const { title, content, category, description, Writefile, imageUrl } = req.body;

  try {
    // 필수 필드 확인
    if (!title || !content || !category || !description || !Writefile || !imageUrl) {
      return res.status(400).json({ message: "모든 필드를 입력해주세요." });
    }

    // 새로운 커뮤니티 글 생성
    const newPost = new Community({
      title,
      content,
      category,
      imageUrl,
      Writefile,
      description,
    });

    await newPost.save();

    res.status(201).json({ message: "작성되었습니다.", post: newPost });
  } catch (error) {
    console.error("커뮤니티 글 작성 중 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};


// 모든 커뮤니티 글 가져오기
const getAllCommunityPosts = async (req, res) => {
  try {
    const posts = await Community.find().sort({ createdAt: -1 }); // 최신순으로 정렬
    res.status(200).json(posts);
  } catch (error) {
    console.error('커뮤니티 글 가져오기 중 오류:', error);
    res.status(500).json({ message: '커뮤니티 데이터를 가져오는 데 실패했습니다.' });
  }
};

export { createCommunityPost, getAllCommunityPosts, uploadFile };
