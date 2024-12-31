import Inquiry from "../../models/shop/InquirySchema.js";

const seedInquiry = async (req, res) => {
  
  const inquiryData =  [
    {
      type: "상품",
      title: "상품 문의",
      writer: "작성자1",
      date: "2024/00/00",
      content: "내용1"
    },
    {
      type: "배송",
      title: "배송 문의",
      writer: "작성자2",
      date: "2024/00/00",
      content: "내용2"
    },
    {
      type: "기타",
      title: "기타 문의",
      writer: "작성자3",
      date: "2024/00/00",
      content: "내용3"
    },
    {
      type: "상품",
      title: "상품 문의",
      writer: "작성자4",
      date: "2024/00/00",
      content: "내용4"
    },
    {
      type: "배송",
      title: "배송 문의",
      writer: "작성자5",
      date: "2024/00/00",
      content: "내용5"
    },
    {
      type: "기타",
      title: "기타 문의",
      writer: "작성자6",
      date: "2024/00/00",
      content: "내용6"
    },
    {
      type: "상품",
      title: "상품 문의",
      writer: "작성자7",
      date: "2024/00/00",
      content: "내용7"
    },
    {
      type: "배송",
      title: "배송 문의",
      writer: "작성자8",
      date: "2024/00/00",
      content: "내용8"
    },
    {
      type: "기타",
      title: "기타 문의",
      writer: "작성자9",
      date: "2024/00/00",
      content: "내용9"
    },
    {
      type: "상품",
      title: "상품 문의",
      writer: "작성자10",
      date: "2024/00/00",
      content: "내용10"
    }
  ];

  // 문의 내역 삽입
//   try {
//     const insertedInquiry = await Inquiry.insertMany(inquiryData);
//     console.log("삽입된 데이터: ", seedInquiry);
//     res.status(201).json({ message: "문의 내역 데이터가 삽입되었습니다.", insertedInquiry })
//   } catch (error) {
//     console.log("삽입 중 오류 발생: ", error)
//     res.status(500).send("문의 내역 데이터 삽입 중 오류가 발생했습니다.")
//   }

// }

try {
  const insertedInquiry = await Inquiry.insertMany(inquiryData);
  console.log("MD 문의 내역이 삽입되었습니다:", insertedInquiry);
  res.status(201).json({
    message: "MD 문의 내역이 성공적으로 삽입되었습니다.",
    insertedInquiry,
  });
} catch (error) {
  console.error("MD 문의 삽입 실패:", error.message);
  res.status(500).json({
    message: "MD 문의 삽입 중 오류가 발생했습니다.",
    error: error.message,
  });
}
}

// 문의 내역 조회
const getInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.find(); // 모든 문의 내역
    res.status(200).json(inquiry);
  } catch (error) {
    console.error("문의 내역을 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("문의 내역을 가져오는 데 실패했습니다.");
  }
};

export { seedInquiry, getInquiry };