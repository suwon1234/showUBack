import VodSubscript from "../../models/vod/vodShowuVideo.js";

// 구독한 리스트 내역 불러오기
const vodSubscript = async (req, res) => {
  console.log("req.user", req.user._id)
  const userId  = req.user._id;
  console.log("로그인한 사용자 : ", userId)

  try {
    const vodSubscriptList = await VodSubscript.find({ likedUsers : userId })
    console.log("유저가 구독한 vod 정보 리스트 :" , vodSubscriptList)

    const vodSubscript = await vodSubscriptList.map((like)=> ({
      mainImage : like.mainImage,
      title : like.title
    }))
    
    console.log("마이페이지에서 필요한 vod 정보 : ", vodSubscript)

    return res.status(200).json({
      vodSubscriptSuccess : true,
      message : "성공적으로 vod 구독한 리스트를 가져오는데 가져왔습니다",
      vodSubscript : vodSubscript
    })
  } catch (error) {
    return res.status(500).json({
      vodSubscriptSuccess : false,
      message : "vod 구독한 리스트를 가져오는데 실패했습니다"
    })
  }
}

export { vodSubscript }