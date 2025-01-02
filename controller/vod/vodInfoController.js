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

export { getVodId };
