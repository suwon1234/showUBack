import Like from "../../models/reservation/likeSchema.js";
import Show from "../../models/reservation/showSchema.js";

export const toggleLike = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const show = await Show.findById(id);
    if (!show) {
      return res.status(404).json({ message: "Show not found" });
    }

    const like = await Like.findOne({ user: userId, showId: id });

    if (like) {
      // 이미 좋아요를 눌렀다면 제거
      await Like.deleteOne({ _id: like._id });
      res.status(200).json({ message: "Like toggled released successfully" });
    } else {
      // 좋아요 추가
      const newLike = new Like({
        user: userId,
        showId: id,
      });
      await newLike.save();
      res.status(200).json({ message: "Like toggled successfully" });
    }
  } catch (error) {
    console.error("Toggle like error:", error);
    res
      .status(500)
      .json({ message: "Toggle like error", error: error.message });
  }
};
