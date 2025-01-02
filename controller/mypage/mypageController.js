import Community from "../../models/community/communitySchema.js";
import Md from "../../models/shop/mdSchema.js";

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
const likeMd = () => {
  const UserId = req.user._id;

  try {
    const foundLikeMd = Md.find({ UserId : UserId })
    console.log(foundLikeMd)

    return res.status(200).json({
      foundLikeMdSuccess : true,
      message : "성공적으로 찜한 md를 가져왔습니다.",
      foundLikeMd : foundLikeMd
    })
  } catch (error) {
    return res.status(500).json({
      foundLikeMdSuccess : false,
      message : "찜한 md를 가져오는데 실패했습니다."
    })
  }

}


export { myActivePost, likeMd }