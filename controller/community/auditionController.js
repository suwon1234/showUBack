import Audition from "../../models/audition/auditionSchema.js";

// 초기 데이터
const auditionData = [
  {
    id: 1,
    category: "뮤지컬",
    image: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTZfOTIg%2FMDAxNzA4MDg4OTY2NjA0.Vypp3YxHr665oBOcQW5G1P6ULXRkoujYZ8V7_sjFZPkg.x61htAdeLDt42bOqwhn00ktO92NBE0-qCjEbIqQHTWYg.JPEG.rmflsxl6032%2FScreenshot%25A3%25DF20240216%25A3%25DF220835%25A3%25DFInstagram.jpg&type=sc960_832",
    title: "EMK MUSIAL COMPANY",
    description: "뮤지컬 <팬텀> 오디션",
  },
  {
    id: 2,
    category: "뮤지컬",
    image: "https://www.contestkorea.com/admincenter/files/meet/202402221229386112816.jpg",
    title: "문화감각",
    description: "뮤지컬 <루카스> 오디션",
  },
  {
    id: 3,
    category: "뮤지컬",
    image: "https://image.yes24.com/themusical//fileStorage/ThemusicalAdmin/Editor/2023/3/6/2023030608848049b0a190b643e3d519a3ef380a07b95f06.jpg",
    title: "EMK MUSIAL COMPANY",
    description: "뮤지컬 <베르사유의 장미> 오디션",
  },
  // 추가 데이터
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
