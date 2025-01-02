import Audition from "../../models/audition/auditionSchema.js";

// 초기 데이터
const auditionData = [
  {
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <팬텀> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg',
    title: '문화감각',
    description: '뮤지컬 <루카스> 오디션',
  },
  {
    image: '뮤지컬',
    image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <베르사유의 장미> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfODQg%2FMDAxNzA4MDg4OTY2NjA1.SZc_0aS5hlTWev8bbGlKHyhpQbdzAu7RXevt3nhShmwg.eYho59UUJ3dycnwzQSvF5f4Odcws5F7Lf0QrOOPoujMg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220756%25A3%25DFInstagram.jpg&type=sc960_832',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <웃는남자> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://www.contestkorea.com/admincenter/files/meet/202411282051038432751.jpg',
    title: '도깨비이엔티',
    description: '뮤지컬 <로보카 폴리> 오디션',
  },
  {
    category: "연극",
    image: 'https://www.contestkorea.com/admincenter/files/meet/202412042146561163027.jpg',
    title: '바다컴퍼니',
    description: '연극 <너에게로 가는 길> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/8/29/202408292237379944eaee5b7a0ebbfe828efe88f8eaed8e.jpg',
    title: '신시컴퍼니',
    description: '뮤지컬 <빌리엘리어트> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2024/11/13/2024111342327016c231ad269ad65a1016a167213f05929a.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <한복 입은 남자> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MTNfMTM1%2FMDAxNjQ5ODE1ODc3MzQ1.3BHjoHCANe4WycbNHeJ613_qjysx_fb-z41o9_M8l1Yg.zv5Ku68OApU8lzmDQF5SQ6OmRubdjgdQ-8A83VT5MH4g.JPEG.ellychoux%2F1.jpg&type=sc960_832',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <마타하리> 오디션',
  },
  {
    category: "연극",
    image: 'https://www.sfac.or.kr/upload/daumeditor/4759535f-a0d9-444a-afde-de4a71a48a85.png',
    title: '서울문화재단',
    description: '연극 <베를리너> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMDNfMjI3%2FMDAxNzI3OTI1NjE4MDk3.wJMdo4KwESnxJkeiHjH7fsy_xNSikNjVRAV6HoQGRVIg.ua_xRjCOR-vJfRk4uhkDBvJ46laHp7TtMSCkZ3nrJP4g.JPEG%2F2025_%25B6%25F3%25C0%25CE%25BE%25F7_%25BF%25C0%25B5%25F0%25BC%25C7_%25B0%25F8%25B0%25ED_%25BD%25E6%25B3%25D7%25C0%25CF-03.jpg&type=a340',
    title: 'CJ MUSICAL',
    description: '뮤지컬 브로드웨이 42번가 오디션',
  },
  {
    id: 12,
    category: "연극",
    image: 'https://www.sac.or.kr/site/main/file/image/uu/7867438c5b71479c9620edecd609801e',
    title: '예술의 전당',
    description: '연극 <햄릿> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://image.newdaily.co.kr/site/data/img/2024/02/15/2024021500021_0.jpg?u=20240215085801',
    title: '에이콤',
    description: '뮤지컬 <명성황후> 오디션',
  },
  {
    category: "연극",
    image: 'https://cdn.mhns.co.kr/news/photo/202411/703708_806763_3039.jpg',
    title: 'comporama',
    description: '연극<THE CELL> 오디션',
  },
  {
    category: "뮤지컬",
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDEwMjFfMTMz%2FMDAxNzI5NDk1OTk1MDQw.9fH3RyIqD9YCMMM59QwBRYCEhdr9JQuRAr2_rRydmj0g.HQk8bunSa_na6JavgvSdjVeHjCis0V1BtZFdUp-P0jog.PNG%2F1.png&type=a340',
    title: 'CJ MUSICAL',
    description: '뮤지컬 <물랑루즈> 오디션',
  },
  {
    category: "연극",
    image: 'https://otr.co.kr/wp-content/uploads/mangboard/2024/06/21/F201233_lost_odi.jpg',
    title: '(주)나인진엔터테인먼트',
    description: '연극 <로스트> 오디션',
  },
  {
    category: "연극",
    image: 'https://www.iseensee.com/event/letmein/241010_audition1.jpg',
    title: '신시컴퍼니',
    description: '연극 <렛미인> 오디션',
  },
  {
    category: "연극",
    image: 'https://www.contestkorea.com/admincenter/files/meet/202411211101244741412.jpg',
    title: '(주)문컴퍼니',
    description: '연극 <분홍립스틱> 오디션',
  },

];

// 초기 데이터 삽입
const seedAuditionData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await Audition.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    const inserted = await Audition.insertMany(auditionData);
    console.log("삽입된 데이터:", inserted);
    res.status(201).json({ message: "Audition 데이터가 성공적으로 추가되었습니다!", inserted });
  } catch (error) {
    console.error("Audition 데이터 추가 중 오류 발생:", error);
    res.status(500).json({ message: "Audition 데이터 추가 중 오류 발생", error: error.message });
  }
};

// 전체 오디션 데이터 조회
const getAllAuditions = async (req, res) => {
  try {
    const auditions = await Audition.find();
    res.status(200).json(auditions);
  } catch (error) {
    console.error("오디션 데이터 조회 중 오류 발생:", error);
    res.status(500).json({ message: "오디션 데이터 조회 중 오류 발생", error: error.message });
  }
};

export { seedAuditionData, getAllAuditions };
