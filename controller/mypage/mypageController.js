import CommunityComment from "../../models/community/communityCommentSchema.js";
import Community from "../../models/community/communitySchema.js";

const getCommentsByUser = async (req, res) => {
  const { _id } = req.user;  
  
  try {
    // 사용자가 작성한 모든 게시물의 postId 조회
    const posts = await Community.find({ _id }); 
    const postIds = posts.map(post => post._id);
    const comments = await CommunityComment.find({ postId: { $in: postIds } }).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error("댓글 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};


export { getCommentsByUser }