import Space from "../../models/reservation/spaceSchema.js";

// 초기 데이터
const spaceData = [
  {
    id: 1,
    name: "Conference Room A",
    location: "Building 1, Floor 3",
    price: "100,000원",
    pricePerHour: 100000,
    pricePerDay: 800000,
    img: "https://img.shareit.kr/prod/img/2022-10-12/c46f4d5e-874d-4a74-9129-dcb24b8d4411.jpg",
    description: "고민중...",
    amenities: ["Wi-Fi", "Projector", "Whiteboard"],
    additionalImages: [
      "https://img.shareit.kr/prod/img/2022-09-30/312dc9ca-b0aa-4c0b-8411-f3d6a190fb74.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/4edcc5e0-51b8-4c9f-8363-4aa641cd5184.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/9f11d616-d0d5-4d23-8201-9fa82de51ab1.jpg",
      "https://img.shareit.kr/prod/img/2022-09-30/8cc7d4a7-7245-4991-a1d1-1eaf449b6b06.jpg",
    ],
  },
  {
    id: 2,
    name: "Event Hall B",
    location: "Building 2, Floor 1",
    price: "200,000원",
    pricePerHour: 200000,
    pricePerDay: 1600000,
    img: "https://img.shareit.kr/prod/img/2023-07-26/73d285ea-1464-4b79-87c6-de8f71f4a5be.jpg",
    description: "고민중...",
    amenities: ["Wi-Fi", "Sound System", "Stage"],
    additionalImages: [
      "https://img.shareit.kr/tempspaceauth/img/2023-07-12/2f047fa3-73ce-4d2b-a10d-b54fb42388f3.jpg",
      "https://img.shareit.kr/prod/img/2023-07-26/637ef551-76e8-4bee-87b7-d82db4be9ec9.jpg",
      "https://img.shareit.kr/prod/img/2023-07-26/8209971f-cb49-4f2f-b28e-101ede0853d1.jpg",
      "https://img.shareit.kr/prod/img/2023-07-26/261ed796-9d48-4333-a3c9-da09843b53bf.jpg",
    ],
  },
];

// 초기 데이터 삽입
const seedSpaceData = async (req, res) => {
  try {
    console.log("기존 데이터를 삭제 중...");
    await Space.deleteMany({});
    console.log("새 데이터를 삽입 중...");
    const inserted = await Space.insertMany(spaceData);
    console.log("삽입된 데이터:", inserted);
    res
      .status(201)
      .json({ message: "Space 데이터가 성공적으로 추가되었습니다!", inserted });
  } catch (error) {
    console.error("Space 데이터 추가 중 오류 발생:", error);
    res.status(500).json({
      message: "Space 데이터 추가 중 오류 발생",
      error: error.message,
    });
  }
};

// 전체 Space 데이터 조회
const getAllSpaces = async (req, res) => {
  try {
    const spaces = await Space.find();
    res.status(200).json(spaces);
  } catch (error) {
    console.error("Space 데이터 조회 중 오류 발생:", error);
    res.status(500).json({
      message: "Space 데이터 조회 중 오류 발생",
      error: error.message,
    });
  }
};

export { seedSpaceData, getAllSpaces };
