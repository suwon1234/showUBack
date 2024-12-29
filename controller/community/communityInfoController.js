import CommunityInfo from "../../models/community/communityInfoSchema.js";

// 초기 데이터 삽입
const seedCommunityInfoData = async (req, res) => {
  const communityInfoData = [
    {
      title: "타이틀1",
      description: "설명1",
      category: "뮤지컬",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/kingkyboots-musical-ko-001-06.jpg?v=1732606423",
    },
    {
      title: "타이틀2",
      description: "설명2",
      category: "공연",
      imageUrl: "https://www.sac.or.kr//site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
    },
  ];

  try {
    console.log("기존 데이터를 삭제 중...");
    await CommunityInfo.deleteMany({});
    console.log("데이터 삽입을 시작합니다...");
    const inserted = await CommunityInfo.insertMany(communityInfoData);
    console.log("삽입된 데이터:", inserted);
    res.status(201).send("CommunityInfo 데이터가 성공적으로 추가되었습니다!");
  } catch (error) {
    console.error("CommunityInfo 데이터 추가 중 오류 발생:", error.message);
    res.status(500).send(`CommunityInfo 데이터 추가 중 오류 발생: ${error.message}`);
  }
};


// 특정 CommunityInfo 데이터 조회
const getCommunityInfoById = async (req, res) => {
  const { id } = req.params;

  try {
    const communityInfo = await CommunityInfo.findById(id);
    if (!communityInfo) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }
    res.status(201).json(communityInfo); 
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

export { seedCommunityInfoData, getCommunityInfoById, addCommentToCommunityInfo };
