import Like from "../../models/reservation/likeSchema.js";
import Show from "../../models/reservation/showSchema.js";

// 쇼 좋아요 토글
export const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const show = await Show.findById(id);

    if (!show) {
      return res.status(404).json({ message: "쇼를 찾을 수 없습니다." });
    }

    let like = await Like.findOne({ user: userId, showId: id });
    if (!like) {
      like = new Like({ user: userId, showId: id });
      await like.save();
      show.likes.push(userId);
    } else {
      await like.remove();
      show.likes.pull(userId);
    }

    await show.save();
    res.status(200).json(show);
  } catch (error) {
    console.error("좋아요 토글 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "좋아요 토글 중 오류 발생", error: error.message });
  }
};
