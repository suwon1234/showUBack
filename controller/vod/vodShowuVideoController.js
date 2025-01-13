import ShowuVideo from '../../models/vod/showuVideoSchema.js'




const getShowuVodId = async (req, res) => {
  const { id } = req.params;

  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID가 요청되었습니다:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const vodinfo = await ShowuVideo.findById(id);

    if (!vodinfo) {
      return res.status(404).json({ message: "영상를 찾을 수 없습니다." });
    }

    res.status(200).json(vodinfo);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};

const getUserName=async(req,res)=>{
  const {id} =req.params;
  try{
    const vodinfo = await ShowuVideo.findById(id);
    
    if (!vodinfo) {
      return res.status(404).json({ message: "영상를 찾을 수 없습니다." });
    }
    const userName = vodinfo.uploaduser.includes(req.user._id);

    if(userName){
      
    }

  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
}
};

export  {getShowuVodId,getUserName}