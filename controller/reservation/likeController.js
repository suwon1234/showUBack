import Like from "../../models/reservation/likeSchema.js";
import Space from "../../models/reservation/spaceSchema.js";
import Show from "../../models/reservation/showSchema.js";

// 좋아요 추가
const addLike = async (req, res) => {
  const { user, spaceId, showId } = req.body;
  try {
    const like = new Like({ user, spaceId, showId });
    await like.save();

    // 좋아요 개수 업데이트
    if (spaceId) {
      await Space.findByIdAndUpdate(spaceId, { $inc: { likeCount: 1 } });
    } else if (showId) {
      await Show.findByIdAndUpdate(showId, { $inc: { likeCount: 1 } });
    }

    res.status(201).json({ message: "좋아요가 추가되었습니다!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "좋아요 추가 중 오류 발생", error: error.message });
  }
};

// 좋아요 취소
const removeLike = async (req, res) => {
  const { user, spaceId, showId } = req.body;
  try {
    await Like.findOneAndDelete({ user, spaceId, showId });

    // 좋아요 개수 업데이트
    if (spaceId) {
      await Space.findByIdAndUpdate(spaceId, { $inc: { likeCount: -1 } });
    } else if (showId) {
      await Show.findByIdAndUpdate(showId, { $inc: { likeCount: -1 } });
    }

    res.status(200).json({ message: "좋아요가 취소되었습니다!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "좋아요 취소 중 오류 발생", error: error.message });
  }
};

// 좋아요 개수 조회
const getLikeCount = async (req, res) => {
  const { itemId, itemType } = req.params;
  try {
    const count = await Like.countDocuments(
      itemType === "show" ? { showId: itemId } : { spaceId: itemId }
    );
    res.status(200).json({ count });
  } catch (error) {
    res
      .status(500)
      .json({ message: "좋아요 개수 조회 중 오류 발생", error: error.message });
  }
};

// 유저가 찜한 공간 조회
const getLikedSpaces = async (req, res) => {
  const { userId } = req.params;
  try {
    const likedSpaces = await Like.find({
      user: userId,
      spaceId: { $ne: null },
    }).populate("spaceId");
    const spaces = likedSpaces.map((like) => ({
      name: like.spaceId.name,
      location: like.spaceId.location,
      price: like.spaceId.price,
      img: like.spaceId.img,
    }));

    res.status(200).json(spaces);
  } catch (error) {
    res
      .status(500)
      .json({ message: "찜한 공간 조회 중 오류 발생", error: error.message });
  }
};

// 유저가 찜한 공연 조회
const getLikedShows = async (req, res) => {
  const { userId } = req.params;
  try {
    const likedShows = await Like.find({
      user: userId,
      showId: { $ne: null },
    }).populate("showId");
    const shows = likedShows.map((like) => ({
      name: like.showId.name,
      venue: like.showId.venue,
      dates: like.showId.dates,
      img: like.showId.img,
    }));

    res.status(200).json(shows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "찜한 공연 조회 중 오류 발생", error: error.message });
  }
};

export { addLike, removeLike, getLikeCount, getLikedSpaces, getLikedShows };
