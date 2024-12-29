import Community from "../../models/community/communitySchema.js";

// 초기 데이터
const seedCommunityData = async (req, res) => {
  const communityData = [
    {
      id : 1,
      title: "타이틀1",
      category: "뮤지컬",
      description: "설명1",
      content: "내용1",
      imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/kingkyboots-musical-ko-001-06.jpg?v=1732606423",
    },
    {
      id : 2,
      title: "타이틀2",
      description: "설명2",
      category: "공연",
      content: "내용2",
      imageUrl: "https://www.sac.or.kr//site/main/file/thumbnail/uu/d5eb6904359c4b5d8eae72d44160e40d",
    },
    {
      title: "타이틀3",
      description: "설명3",
      content: "내용3",
      category: "밴드",
      imageUrl: "https://lv2-cdn.azureedge.net/day6/42990251ca404e40bb4fcf81f7be9680-[%ED%81%B4%EB%A6%B0]%200830_%20Concept%20Photo_%20Group%201-2.jpg",
    },
    {
      title: "타이틀4",
      description: "설명4",
      content: "내용4",
      category: "영화",
      imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20241015_196%2F1728982918695jsvLp_JPEG%2Fmovie_image.jpg",
    },
    {
        title: "타이틀5",
        description: "설명5",
        content: "내용5",
        category: "뮤지컬",
        imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/42ndstreetonbroadway-musical-ko-003-07.jpg?v=1676454555"
      },
      {
        title: "타이틀6",
        description: "설명6",
        content: "내용6",
        category: "연극",
        imageUrl: "https://www.sejongpac.or.kr/cmmn/file/imageSrc.do?fileStreCours=faec0c25744c22e99776405c0fa72802b034c11453522f543494e84872ada102&streFileNm=4be0a06b6afe2f47cbcd2948ad228dbf52e2f1440befb29c34155b70a7ef77fe"
      },
      {
        title: "타이틀7",
        description: "설명7",
        content: "내용7",
        category: "뮤지컬",
        imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/gwangwhamunlovesong-musical-ko-004-03.jpg?v=1727398714"
      },
      {
        title: "타이틀8",
        description: "설명8",
        content: "내용8",
        category: "뮤지컬",
        imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/maybe-a-happy-ending-musical-ko-007-05.jpg?v=1728331267"
      },
      {
        title: "타이틀9",
        description: "설명9",
        content: "내용9",
        category: "뮤지컬",
        imageUrl: "https://web-cf-image.cjenm.com/resize/1344x756/public/share/metamng/programs/contents-detail-image-moulin-rouge-the-musical-10.jpg?v=1678248215"
      },
      {
        title: "타이틀10",
        description: "설명",
        content: "내용",
        category: "연극",
        imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24016563_p.gif"
      },
      {
        title: "타이틀11",
        description: "설명",
        content: "내용",
        category: "연극",
        imageUrl: "https://ticket7.bscc.or.kr/Down/Perf/202409/(%EC%A0%80)%ED%8F%AC%EC%8A%A4%ED%84%B0_%EB%8D%94%EB%93%9C%EB%A0%88%EC%84%9C_%EC%98%A4%EB%A7%8C%EC%84%9D_1.jpg"
      },
      {
        title: "타이틀12",
        description: "설명",
        content: "내용",
        category: "영화",
        imageUrl: "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20241121_127%2F1732160737384GksgQ_JPEG%2Fmovie_image.jpg"
      },
      {
        title: "타이틀13",
        description: "설명",
        content : "내용",
        category: "공연",
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMTdfMjEw%2FMDAxNzI5MTI4NTA0MTQw.eeACUu17qoSxerChvfAFTnB3GSmv9fGUMSFUDjKM4oYg.2lM6VyGTKd3YJpIhvl1K7hYxX7KvuvvfUodRTdKquaAg.JPEG%2FKakaoTalk_20241017_101915748.jpg&type=sc960_832"
      },
      {
        title: "타이틀14",
        description: "설명",
        content: "내용",
        category: "공연",
        imageUrl: "https://www.lotteconcerthall.com/Down/Perf/202407/BBC_4%ED%9A%8C%EC%B0%A8_%EC%8A%A4%EB%AA%B0%EB%B0%B0%EB%84%88_228x304.jpg"
      },
      {
        title: "타이틀15",
        description: "설명",
        content: "내용",
        category: "뮤지컬",
        imageUrl: "https://www.shownote.com/Down/Perf/202305/%EB%A9%A4%ED%94%BC%EC%8A%A4_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg"
      },
      {
        title: "타이틀16",
        description: "설명",
        content: "내용",
        category: "영화",
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTNfMzAg%2FMDAxNjc4NjgwODUzMzY1.sLqZKH1qG0QuafM-9X3G1_GCZ7Cva7ldocRuBWBRHNcg.KFiATwpymi6gS4WvpV8avG5lsFtJjeOHFratzPdlPeAg.PNG.dhoooonl%2F2.png&type=sc960_832"
      },
      {
        title: "타이틀17",
        description: "설명",
        content: "내용",
        category: "밴드",
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzEyMDhfMTM3%2FMDAxNTEyNjYyMzYzNDA2.j-51okeAx4uxlFIRGkz9WCieAt2QTkrjC-nLXRw276Eg.8LayRTd0OwTOP6DatIBC6Ur1bul63d689ZltRAQC7SUg.JPEG.whitesthoo%2FIMG_6057.jpg&type=sc960_832"
      },
      {
        title: "타이틀18",
        description: "설명",
        content: "내용",
        category: "공연",
        imageUrl: "https://www.daejeon.go.kr/FileUpload/KMUSIC/202411/20241115103304249.jpg"
      },
      
      {
        title: "타이틀19",
        description: "설명",
        content: "내용",
        category: "뮤지컬",
        imageUrl: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEyMjZfMjQ4%2FMDAxNjcyMDY0MTA5NzIw.FNdA_U9JmR0gk9OWCa5IZFyE60Z6jrtS_qc-UlvL7Qkg.td4UF7FQT3YeIUVBEP4-t_2bI1NL4gZbyjwfmAJuLbAg.JPEG.dddyeon314%2F%25B1%25D7%25B8%25B21.jpg&type=sc960_832"
      },    
      {
        title: "타이틀20",
        description: "설명",
        content: "내용",
        category: "연극",
        imageUrl: "https://ticketimage.interpark.com/Play/image/large/24/24014999_p.gif"
      },  
  ];

  try {
    // console.log("기존 데이터를 삭제 중...");
    // await Community.deleteMany({});
    console.log("데이터 삽입을 시작합니다...");
    const inserted = await Community.insertMany(communityData);
    console.log(`삽입된 데이터: ${inserted}`);
    res.status(201).send("Community 데이터가 성공적으로 추가되었습니다!");
  } catch (error) {
    console.error("Community 데이터 추가 중 오류 발생:", error);
    res.status(500).send("Community 데이터 추가 중 오류 발생");
  }
};


// 커뮤니티 게시물 전체 조회
const getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find(); // 커뮤니티 데이터
        console.log(communities)
    res.status(200).json(communities); // 커뮤니티 목록 
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error: error.message });
  }
};

// 커뮤니티 게시물 추가
const createCommunity = async (req, res) => {
  const { title, author, content, category } = req.body;

  if (!title || !author || !content || !category) {
    console.log("모든 필드를 입력해주세요.");
    return res.status(400).json({ message: "모든 필드를 입력해주세요." });
  }

  try {
    // 커뮤니티 게시물 생성
    const newCommunity = new Community({
      title,
      author,
      content,
      category,
      likeCount: 0, 
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




export { seedCommunityData, getAllCommunities, createCommunity };
