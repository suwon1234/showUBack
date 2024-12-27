import Community from "../../models/community/communitySchema.js"

// 커뮤니티 게시물 전체 조회
const getAllCommunities = async (req, res) => {
    try {
      const communities = await Community.find(); // 커뮤니티 데이터를 모두 조회
      res.status(200).json(communities); // 커뮤니티 목록 
    } catch (error) {
      res.status(500).json({ message: "서버 오류", error: error.message });
    }
  };

  // 커뮤니티 게시물 생성
const createCommunity = async (req, res) => {
    try {
      const { title, author, content, category, file } = req.body;
      const newCommunity = new Community({
        title,
        author,
        content,
        category,
        file,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      await newCommunity.save();
      res.status(201).json({ message: "커뮤니티 게시물이 성공적으로 생성되었습니다." });
    } catch (error) {
      res.status(500).json({ message: "게시물 생성 중 오류 발생", error: error.message });
    }
  };

  



export { register, login, modify, remove }