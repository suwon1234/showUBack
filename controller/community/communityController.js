import Community from "../../models/community/communitySchema.js";

// 초기 데이터
const seedCommunityData = async (req, res) => {

  try { 

  const communityData = [
    {
      UserId: "677624c658aa24731b3e37ba", 
      Writefile: "-",
      title: "타이틀1",
      category: "뮤지컬",
      description: "설명1",
      content: "내용1",
      imageUrl: "/images/community/musical-1.jpg",
    },
    {
      UserId: "677624c658aa24731b3e37ba",
      Writefile: "-",
      title: "타이틀2",
      description: "설명2",
      category: "공연",
      content: "내용2",
      imageUrl: "/images/community/show-1.jpg",
    },
    {
      UserId: "677624c658aa24731b3e37ba",
      Writefile: "-",
      title: "타이틀3",
      description: "설명3",
      content: "내용3",
      category: "밴드",
      imageUrl: "/images/community/band-1.jpg",
    },
    {
      UserId: "677624c658aa24731b3e37ba",
      Writefile: "-",
      title: "타이틀4",
      description: "설명4",
      content: "내용4",
      category: "영화",
      imageUrl: "/images/community/movie-1.jpg",
    },
    {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀5",
        description: "설명5",
        content: "내용5",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-2.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀6",
        description: "설명6",
        content: "내용6",
        category: "연극",
        imageUrl: "/images/community/theater-1.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀7",
        description: "설명7",
        content: "내용7",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-3.jpg"
      },
      {
        UserId:"677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀8",
        description: "설명8",
        content: "내용8",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-4.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀9",
        description: "설명9",
        content: "내용9",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-5.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀10",
        description: "설명",
        content: "내용",
        category: "연극",
        imageUrl: "/images/community/theater-2.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀11",
        description: "설명",
        content: "내용",
        category: "연극",
        imageUrl: "/images/community/theater-3.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀12",
        description: "설명",
        content: "내용",
        category: "영화",
        imageUrl: "/images/community/movie-2.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀13",
        description: "설명",
        content : "내용",
        category: "공연",
        imageUrl: "/images/community/show-2.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀14",
        description: "설명",
        content: "내용",
        category: "공연",
        imageUrl: "/images/community/show-3.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀15",
        description: "설명",
        content: "내용",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-6.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀16",
        description: "설명",
        content: "내용",
        category: "영화",
        imageUrl: "/images/community/movie-3.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀17",
        description: "설명",
        content: "내용",
        category: "밴드",
        imageUrl: "/images/community/band-2.jpg"
      },
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀18",
        description: "설명",
        content: "내용",
        category: "공연",
        imageUrl: "/images/community/show-4.jpg"
      },
      
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀19",
        description: "설명",
        content: "내용",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-7.jpg"
      },    
      {
        UserId: "677624c658aa24731b3e37ba",
        Writefile: "-",
        title: "타이틀20",
        description: "설명",
        content: "내용",
        category: "뮤지컬",
        imageUrl: "/images/community/musical-8.jpg"
      },  
  ];

  console.log("기존 데이터를 삭제 중...");
  await Community.deleteMany({});
  console.log("데이터 삽입을 시작합니다...");
  const inserted = await Community.insertMany(communityData);
  res.status(201).json({ message: "Community 데이터가 성공적으로 추가되었습니다!", inserted });
} catch (error) {
  console.error("Community 데이터 추가 중 오류 발생:", error);
  res.status(500).json({ message: "Community 데이터 추가 중 오류 발생", error: error.message });
}
};



// 커뮤니티 게시물 전체 조회
const getAllCommunities = async (req, res) => {
  try {
    const communities = await Community.find().populate("UserId", "name email"); // 커뮤니티 데이터
    return res.status(200).json(communities); // 커뮤니티 목록
  } catch (error) {
    // 이미 응답을 보낸 후에는 다시 보내지 않기
    if (!res.headersSent) {
      return res.status(500).json({ message: "서버 오류", error: error.message });
    }
  }
};

// 커뮤니티 게시물 상세 조회 (ID 검증 포함)
const getCommunityById = async (req, res) => {
  const { id } = req.params;

  // 유효한 ObjectId인지 확인
  if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
    console.error("유효하지 않은 ID 요청:", id);
    return res.status(400).json({ message: "유효하지 않은 ID 형식입니다." });
  }

  try {
    const community = await Community.findById(id).populate("UserId", "name email");

    if (!community) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.status(200).json(community);
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "서버 오류 발생", error: error.message });
  }
};



// 커뮤니티 게시물 추가
const createCommunity = async (req, res) => {
  const { title, content, category, imageUrl, description } = req.body;

  if (!title || !content || !category || !imageUrl || !description) {
    console.log("모든 필드를 입력해주세요.");
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    // 커뮤니티 게시물 생성
    const newCommunity = new Community({
      UserId: req.user._id, // JWT 인증 사용자 ID
      title,
      content,
      category,
      imageUrl,
      description,
      createdAt: new Date(), 
      updatedAt: new Date() 
    });

    // DB에 저장
    await newCommunity.save();
    return res.status(201).json({ message: "커뮤니티 게시물이 생성되었습니다.", newCommunity });
  } catch (error) {
    return res.status(500).json({ message: "서버 오류", error: error.message });
  }
};




export { seedCommunityData, getAllCommunities, createCommunity,getCommunityById };
