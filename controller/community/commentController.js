import CommunityComment from "../../models/community/communityCommentSchema.js";

// 댓글 추가
const addComment = async (req, res) => {
  const { postId, user, content } = req.body;

  if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, message: "유효하지 않은 postId 형식입니다." });
  }
  if (!user || user.length < 3) {
    return res.status(400).json({ success: false, message: "사용자 이름은 최소 3자 이상이어야 합니다." });
  }
  if (!content || content.length < 1) {
    return res.status(400).json({ success: false, message: "댓글 내용을 입력해주세요." });
  }

  try {
    const newComment = new CommunityComment({ postId, user, content });
    await newComment.save();
    res.status(201).json({
      success: true,
      message: "댓글이 성공적으로 추가되었습니다.",
      data: newComment,
    });
  } catch (error) {
    console.error("댓글 추가 중 오류 발생:", error);
    res.status(500).json({ success: false, message: "서버 오류가 발생했습니다.", error: error.message });
  }
};

// 특정 게시물의 댓글 조회
const getCommentsByPostId = async (req, res) => {
  const { postId } = req.params;

  if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, message: "유효하지 않은 postId 형식입니다." });
  }

  try {
    const comments = await CommunityComment.find({ postId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    console.error("댓글 조회 중 오류 발생:", error);
    res.status(500).json({ success: false, message: "서버 오류가 발생했습니다.", error: error.message });
  }
};

// 댓글 삭제
const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  if (!commentId || !commentId.match(/^[0-9a-fA-F]{24}$/)) {
    return res.status(400).json({ success: false, message: "유효하지 않은 commentId 형식입니다." });
  }

  try {
    const deletedComment = await CommunityComment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ success: false, message: "댓글을 찾을 수 없습니다." });
    }

    res.status(200).json({ success: true, message: "댓글이 성공적으로 삭제되었습니다." });
  } catch (error) {
    console.error("댓글 삭제 중 오류 발생:", error);
    res.status(500).json({ success: false, message: "서버 오류가 발생했습니다.", error: error.message });
  }
};

export { addComment, getCommentsByPostId, deleteComment };
