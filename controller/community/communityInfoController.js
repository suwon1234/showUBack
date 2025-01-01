import CommunityInfo from "../../models/community/communityInfoSchema.js";
import Community from "../../models/community/communitySchema.js";

// 초기 데이터 삽입
const seedCommunityInfoData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await CommunityInfo.deleteMany({});

    // communities 데이터를 가져와 communityInfo에 삽입
    const communities = await Community.find();
    const communityInfoData = communities.map((community) => ({
      _id: community._id, // communities 컬렉션의 _id를 동일하게 사용
      title: community.title,
      description: community.description,
      content : community.content,
      category: community.category,
      imageUrl: community.imageUrl,
      createdAt: community.createdAt,
      updatedAt: community.updatedAt,
    }));

    console.log("데이터 삽입을 시작합니다...");
    const inserted = await CommunityInfo.insertMany(communityInfoData);
    console.log("삽입된 데이터:", inserted);
    res.status(201).json(inserted);
  } catch (error) {
    console.error("CommunityInfo 데이터 추가 중 오류 발생:", error.message);
    res.status(500).send(`CommunityInfo 데이터 추가 중 오류 발생: ${error.message}`);
  }
};

// CommunityInfo 데이터 조회
const getCommunityInfoById = async (req, res) => {
  const { id } = req.params;

  // ID 형식 검증
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID 요청:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    // 데이터베이스에서 데이터 조회
    const communityInfo = await CommunityInfo.findById(id);
    if (!communityInfo) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }
    res.status(200).json(communityInfo);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};


// 댓글 추가
const addCommentToCommunityInfo = async (req, res) => {
  const { id } = req.params;
  const { user, content } = req.body;

  if (!user || !content) {
    return res.status(400).json({ message: "사용자와 내용을 입력해주세요." });
  }

  try {
    const communityInfo = await CommunityInfo.findById(id);
    if (!communityInfo) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    // 댓글 추가
    if (!communityInfo.comments) {
      communityInfo.comments = [];
    }
    communityInfo.comments.push({ user, content, date: new Date() });
    await communityInfo.save();

    res.status(200).json({ message: "댓글이 추가되었습니다.", communityInfo });
  } catch (error) {
    console.error("댓글 추가 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 좋아요
const toggleLike = async (req, res) => {
    const { id } = req.params; // 게시글 ID
    const { userId } = req.body; // 사용자 ID
    console.log('like ID:', req.params.id);
    console.log('User ID:', req.body.userId);
    
    try {
    const post = await CommunityLike.findById( req.params.id );
        console.log('Found post:', post);
        console.log('Post ID :', id );

    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }

    const isLiked = post.likedUsers.includes(userId);

    if (isLiked) {
      post.likes -= 1;
      post.likedUsers = post.likedUsers.filter((likedId ) => likedId !== userId);
    } else {
      post.likes += 1;
      post.likedUsers.push(userId);
    }

    await post.save();

    res.status(200).json({
      message: isLiked ? '좋아요 취소됨' : '좋아요 추가됨',
      likes: post.likes,
    });
  } catch (error) {
    console.error('좋아요 처리 중 오류:', error);
    res.status(500).json({ message: '서버 오류', error: error.message });
  }
};

export { seedCommunityInfoData, getCommunityInfoById, addCommentToCommunityInfo,toggleLike };







// if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) 관련 ---------------------------------

// MongoDB에서 사용하는 _id 필드는 24자리 16진수 문자열로 구성된 ObjectId여야함

// id.match(/^[0-9a-fA-F]{24}$/):
// id가 MongoDB ObjectId 형식(24자리 16진수 문자열)인지 확인

// 정규식 설명:
// ^와 $: 문자열의 시작과 끝.
// [0-9a-fA-F]: 16진수 문자(09와 af, A~F).
// {24}: 정확히 24자.
