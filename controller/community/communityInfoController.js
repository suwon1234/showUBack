import Community from "../../models/community/communitySchema.js";
import CommunityComment from "../../models/community/communityCommentSchema.js";

// 커뮤니티 게시물 조회 (상세 정보)
const getCommunityById = async (req, res) => {
  const { id } = req.params;

  // 유효한 ObjectId인지 확인
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID 요청:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    // Community 데이터 조회
    const community = await Community.findById(id).populate("UserId", "name email");  // UserId 필드도 가져오기

    if (!community) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.status(200).json(community);  // 커뮤니티 상세 데이터 반환
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 커뮤니티 목록 조회
const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find().populate("UserId", "name email").lean();
    return res.status(200).json(communities); // 커뮤니티 목록 반환
  } catch (error) {
    console.error("커뮤니티 데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};


// 댓글 추가
const addCommentToCommunity = async (req, res) => { 
  const { id } = req.params;  // Community의 _id
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "댓글 내용을 입력해주세요." });
  }

  try {
    const newComment = new CommunityComment({
      postId: id,  // Community의 _id 값
      user: req.user._id,  // JWT에서 가져온 사용자 ID
      content,
    });

    await newComment.save();
    res.status(201).json({ message: "댓글이 추가되었습니다.", newComment });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 좋아요 기능
const toggleLike = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Community.findById(id);
    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    const isLiked = post.likedUsers.includes(req.user._id);

    if (isLiked) {
      post.likes -= 1;
      post.likedUsers = post.likedUsers.filter((userId) => userId.toString() !== req.user._id.toString());
    } else {
      post.likes += 1;
      post.likedUsers.push(req.user._id);
    }

    await post.save();
    res.status(200).json({
      message: isLiked ? "좋아요 취소됨" : "좋아요 추가됨",
      likes: post.likes,
    });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

export { getCommunityById, addCommentToCommunity, toggleLike , getAllCommunities};




