import Community from "../../models/community/communitySchema.js";
import Auction from "../../models/shop/auctionSchema.js";
import Md from "../../models/shop/mdSchema.js";
import Like from "../../models/users/likeSchema.js";

// 커뮤니티 작성한 글 목록 가져오기
const myActivePost = async (req, res) => {
  const UserId = req.user._id; 
  // console.log("로그인한 사용자 id :", UserId)

  try {
    const foundPosts = await Community.find({ UserId : UserId })
    console.log("foundPosts :", foundPosts)

    return res.status(200).json({
      getPostSuccess : true,
      message : "성공적으로 작성한 글 목록을 가져왔습니다.",
      foundPosts : foundPosts
    })
  } catch (error) {
    return res.status(500).json({
      getPostSuccess : false,
      message : "작성한 글 목록을 가져오는데 실패했습니다.",
    })
  }
}

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


export { myActivePost, likeMd, likeAuction }