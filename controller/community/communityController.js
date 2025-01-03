import Community from "../../models/community/communitySchema.js";
import CommunityComment from "../../models/community/communityCommentSchema.js";



// 커뮤니티 게시물 상세 조회
const getCommunityById = async (req, res) => {
  const { id } = req.params;

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const community = await Community.findById(id).populate("UserId", "name email");

    if (!community) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.status(200).json(community);
  } catch (error) {
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 커뮤니티 게시물 목록 조회
const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find().populate("UserId", "name email").lean();
    res.status(200).json(communities);
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 댓글 추가
const addCommentToCommunity = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "댓글 내용을 입력해주세요." });
  }

  try {
    const newComment = new CommunityComment({
      postId: id,
      user: req.user._id,
      content,
    });

    await newComment.save();
    res.status(201).json({ message: "댓글이 추가되었습니다.", comment: newComment });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 좋아요 토글
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

export { getCommunityById, getAllCommunities, addCommentToCommunity, toggleLike };
