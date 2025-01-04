import Reservation from "../../models/reservation/reservationSchema.js";
import Space from "../../models/reservation/spaceSchema.js";
import Auction from "../../models/shop/auctionSchema.js";
import Md from "../../models/shop/mdSchema.js";

//md 좋아요한 상품 가져오기
const likeMd = async (req, res) => {
  const UserId = req.user._id;
  console.log("로그인한 사용자 id :", UserId)

  try {
    //사용자가 찜한 상품 조회
    const likedMdList = await Md.find({ isHearted : UserId })
    console.log("likedMdList", likedMdList)
    
    const likedMd = likedMdList.map((like) => ({
      mdName: like.mdName,
      price: like.price,
      image: like.image,
    }))

    console.log("찜한 md 리스트: ", likedMd)

    return res.status(200).json({
      foundLikeMdSuccess : true,
      message : "성공적으로 찜한 md를 가져왔습니다.",
      likedMd : likedMd
    })
  } catch (error) {
    return res.status(500).json({
      foundLikeMdSuccess : false,
      message : "찜한 md를 가져오는데 실패했습니다."
    })
  }

}


// 경매 찜한 상품 내역 불러오기
const likeAuction= async (req, res) => {
  const userId = req.user._id;
  console.log("로그인한 사용자: ", userId)

  try {
    const likedAuctionList = await Auction.find({ isHearted : userId });
    console.log("찜한 경매 리스트 : ", likedAuctionList);

     const likedAuction = likedAuctionList.map((like) => ({
      auctionName : like.auctionName,
      image : like.image,
      count : like.count,
      time : like.time
     }))

    return res.status(200).json({
      foundLikeAuctoinSuccess : true,
      message : "성공적으로 찜한 경매를 가져왔습니다.",
      likedAuction : likedAuction
    })

  } catch (error) {
    return res.status(500).json({
      foundLikeAuctoinSuccess : false,
      message : "찜한 경매를 가져오는데 실패했습니다.",
    })
    
  }
}

// 찜한 공간 대여 목록 불러오기
const likeSpace = async (req, res) => {
  const userId = req.user._id
  // console.log("로그인한 사용자: ", userId)

  try {
    // 예약대여 좋아요한 상품 리스트
    const likedReservationList = await Reservation.find({ user : userId })
    // console.log("예약대여 좋아요한 상품 리스트 : ", likedReservationList)
    
    // 좋아요한 공간 대여 정보 id 리스트
    const spaceIdList = await likedReservationList.map((space) => ({
      spaceId : space.spaceId
    }))
      .filter(item => item.spaceId !== null)
    // console.log("좋아요한 공간 대여 정보 id 리스트 : ", spaceIdList)

    // spaceId만 가져오기
    const spaceId = await spaceIdList.map((item) => item.spaceId)
    
    // spaceId 일치하는 공간 대여 정보 가져오기
    const likeSpaceList = await Space.find({ _id: { $in: spaceId }})
    console.log("spaceId 일치하는 공간 대여 정보 리스트 : ", likeSpaceList)

    // 마이페이지에 필요한 공간 대여 정보
    const likeSpace = await likeSpaceList.map((like) => ({
      name : like.name,
      location : like.location,
      price : like.price,
      img : like.img
    }))

    console.log("마이페이지에 필요한 공간 대여 정보 리스트 : ", likeSpace)

    return res.status(200).json({
      likeSpaceSuccess : true,
      message : "성공적으로 찜한 공간 대여 목록을 가져왔습니다",
      likeSpace : likeSpace
    })
    
  } catch (error) {
    return res.status(500).json({
      likeSpaceSuccess : false,
      message : "찜한 공간 대여 목록을 가져오는데 실패했습니다"
    })
  }
  
}
export { likeMd, likeAuction, likeSpace }