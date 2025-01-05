import vodShowuVideo from "../../models/vod/vodShowuVideo.js";


const getVodId = async (req, res) => {
  const { id } = req.params;

  // 유효한 MongoDB ObjectID인지 확인
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    // 비디오 정보 조회
    const vodinfo = await vodShowuVideo.findById(id);

    // 비디오 정보가 없는 경우
    if (!vodinfo) {
      return res.status(404).json({ message: "영화가 없습니다" });
    }

    // 성공적으로 비디오 정보 반환
    res.status(200).json(vodinfo);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

// 관심 비관심심
const getVodLikes =async(req,res)=>{
  const { id } = req.params;

  try {

    const vodinfo = await vodShowuVideo.findById(id); 

    if (!vodinfo) {
      return res.status(404).json({ message: "오류" });
    }
    if (!Array.isArray(vodinfo.likedUsers)) {
      vodinfo.likedUsers = [];
    }
    const pushLike = vodinfo.likedUsers.includes(req.user._id)
    if(pushLike){
      vodinfo.likes-=1
      vodinfo.likedUsers = vodinfo.likedUsers.filter((userId) => userId.toString() !== req.user._id.toString());
    }
    else{
      vodinfo.likes+=1
      pushLike.push(req.user._id)
    }
    await vodinfo.save();
    res.status(200).json({
      message: isLiked ? "관심 취소" : "관심 추가",
      likes: vodinfo.likes,
    });

    res.status(200).json({ likes: vodinfo.likes });
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

export { getVodId,getVodLikes};
