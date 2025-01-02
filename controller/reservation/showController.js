import Show from "../../models/reservation/showSchema.js";

// 초기 데이터
const showData = [
  {
    id: 1,
    name: "뮤지컬 <시라노>",
    venue: "디큐브 링크 아트센터",
    dates: "2024.10.15 - 2025.1.5",
    duration: "120분",
    grade: "13세 이상",
    price: {
      R: "77,000원",
      S: "130,000원",
    },
    discounts: [
      "PAYCO VIP 회원 할인 10% 할인",
      "5차 조기예매 할인 25% 할인",
      "마티네 공연 할인 30% 할인",
      "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
      "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
    ],
    img: "https://ticketimage.interpark.com/Play/image/large/24/24014885_p.gif",
    cast: [
      { name: "박정원", img: "path/to/image1.jpg" },
      { name: "손유동", img: "path/to/image2.jpg" },
      { name: "박준희", img: "path/to/image3.jpg" },
      { name: "김리현", img: "path/to/image4.jpg" },
      { name: "김재범", img: "path/to/image5.jpg" },
      { name: "김종구", img: "path/to/image6.jpg" },
      { name: "김경수", img: "path/to/image7.jpg" },
      { name: "김지철", img: "path/to/image8.jpg" },
    ],
  },
  {
    id: 2,
    name: "뮤지컬 <광화문 연가>",
    venue: "세종문화회관 대극장",
    dates: "2024.12.1 - 2025.2.28",
    duration: "150분",
    grade: "15세 이상",
    price: {
      R: "110,000원",
      S: "170,000원",
    },
    discounts: [
      "showU 회원 할인 15% 할인",
      "조기예매 할인 20% 할인",
      "학생 할인 30% 할인",
    ],
    img: "https://ticketimage.interpark.com/Play/image/large/24/24016737_p.gif",
    cast: [
      { name: "김준수", img: "path/to/image1.jpg" },
      { name: "정성화", img: "path/to/image2.jpg" },
      { name: "신영숙", img: "path/to/image3.jpg" },
    ],
  },
];

// 초기 데이터 삽입
const seedShowData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await Show.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    const inserted = await Show.insertMany(showData);
    console.log("삽입된 데이터:", inserted);
    res
      .status(201)
      .json({ message: "공연 데이터가 성공적으로 추가되었습니다!", inserted });
  } catch (error) {
    console.error("공연 데이터 추가 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "공연 데이터 추가 중 오류 발생", error: error.message });
  }
};

// 전체 Show(공연) 데이터 조회
const getAllShows = async (req, res) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    console.error("공연 데이터 조회 중 오류 발생:", error);
    res
      .status(500)
      .json({ message: "공연 데이터 조회 중 오류 발생", error: error.message });
  }
};

export { seedShowData, getAllShows };
