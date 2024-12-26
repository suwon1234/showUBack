import Comment from '../models/commentSchema.js';


  const createComment = async (req, res) => {
    try {
      const { user, postId, content } = req.body;
      const newComment = await Comment.create({ user, postId, content });
      res.status(201).json({
        message: '댓글이 성공적으로 생성되었습니다.',
        success: true,
        data: newComment,
      })
    } catch (error) {
      res.status(500).json({
        message: '댓글 생성 실패',
        success: false,
        error: error.message
      });
    }
  };

  export { createComment };