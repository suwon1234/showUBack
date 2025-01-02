import Like from "../../models/reservation/likeSchema.js";

// 좋아요 추가
const addLike = async (req, res) => {
  const { user, spaceId, showId } = req.body;
  try {
    const like = new Like({ user, spaceId, showId });
    const newLike = await like.save();
    res.status(201).json(newLike);
  } catch (error) {
    res
      .status(500)
      .json({ message: "좋아요 추가 중 오류 발생", error: error.message });
  }
};

// 좋아요 삭제
const removeLike = async (req, res) => {
  const { user, spaceId, showId } = req.body;
  try {
    const condition = { user };
    if (spaceId) {
      condition.spaceId = spaceId;
    } else if (showId) {
      condition.showId = showId;
    }
    await Like.deleteOne(condition);
    res.status(200).json({ message: "좋아요가 성공적으로 삭제되었습니다!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "좋아요 삭제 중 오류 발생", error: error.message });
  }
};

// 좋아요 조회
const getLikes = async (req, res) => {
  try {
    const likes = await Like.find();
    res.status(200).json(likes);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "좋아요 데이터 조회 중 오류 발생",
        error: error.message,
      });
  }
};

export { addLike, removeLike, getLikes };
