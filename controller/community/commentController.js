import CommunityComment from "../../models/community/communityCommentSchema.js";

// 댓글 추가
  const addComment = async (req, res) => {
  const { postId, user, content } = req.body;

  if (!postId || !user || !content) {
    return res.status(400).json({ message: "모든 항목을 입력해주세요." });
  }

  try {
    const newComment = new CommunityComment({
      postId,
      user,
      content,
    });
    await newComment.save();

    res.status(201).json({ message: "댓글이 추가되었습니다.", comment: newComment });
  } catch (error) {
    console.error("댓글 추가 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 특정 게시물의 댓글 조회
const getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await CommunityComment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    console.error("댓글 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 댓글 삭제
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    await CommunityComment.findByIdAndDelete(commentId);
    res.status(200).json({ message: "댓글이 삭제되었습니다." });
  } catch (error) {
    console.error("댓글 삭제 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

export { addComment, getCommentsByPostId, deleteComment };