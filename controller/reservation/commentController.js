import Comment from "../../models/reservation/commentSchema.js";

// 댓글 추가
const addComment = async (req, res) => {
  const { user, showId, text } = req.body;
  try {
    const comment = new Comment({ user, showId, text });
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "댓글 추가 중 오류 발생", error: error.message });
  }
};

// 댓글 수정
const updateComment = async (req, res) => {
  const { commentId, text } = req.body;
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { text, updatedAt: getCurrentTime() },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "댓글 수정 중 오류 발생", error: error.message });
  }
};

// 댓글 삭제
const deleteComment = async (req, res) => {
  const { commentId } = req.body;
  try {
    await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ message: "댓글이 성공적으로 삭제되었습니다!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "댓글 삭제 중 오류 발생", error: error.message });
  }
};

// 모든 댓글 조회
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "댓글 조회 중 오류 발생", error: error.message });
  }
};

export { addComment, updateComment, deleteComment, getComments };
