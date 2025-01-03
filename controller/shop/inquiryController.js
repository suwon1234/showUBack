import Md from "../../models/shop/mdSchema.js";
import Auction from "../../models/shop/auctionSchema.js";
import { getCurrentTime } from "../../utils/utils.js";

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


const createInquiry = async (req, res) => {
  try {
    const { type, form, mdInquiryId, auctionInquiryId, title, content } = req.body;
    const writer = req.user.name;  // 작성자

    // MD 문의에서 상품명을 가져오기 위한 변수
    let productName;  
    let auctionName;

    // MD 문의 처리
    if (mdInquiryId) {
      const md = await Md.findById(mdInquiryId);
      if (md) {
        productName = md.productName;  // MD 상품명 저장
      } else {
        return res.status(404).json({ message: "MD 정보를 찾을 수 없습니다." });
      }
    }

    // 경매 문의 처리
    if (auctionInquiryId) {
      const auction = await Auction.findById(auctionInquiryId);
      if (auction) {
        auctionName = auction.auctionName;  // 경매 상품명 저장
      } else {
        return res.status(404).json({ message: "경매 정보를 찾을 수 없습니다." });
      }
    }

    // 새로운 문의 내역 생성
    const newInquiry = new Inquiry({
      title, type, form, writer, content,
      productName,  // MD 상품명
      auctionName,  // 경매 상품명
      mdInquiryId,  // MD 상품 ID
      auctionInquiryId,  // 경매 상품 ID
      createdAt: getCurrentTime(),
      updatedAt: getCurrentTime(),
    });

    // 문의 내역 저장
    await newInquiry.save();

    // 문의 등록 성공
    res.status(201).json({
      message: "문의 내역이 등록되었습니다.",
      inquiry: newInquiry,
    });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error });
  }
};

// 모든 문의 내역 조회
const getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate('writer', 'username')  // 작성자 정보만 가져오기
      .populate('mdInquiryId')         // MD 문의의 상품 정보
      .populate('auctionInquiryId')    // 경매 문의의 경매 정보
      .exec();

    res.status(200).json({ inquiries });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error });
  }
};


// 개별 문의 내역 조회
const getInquiryById = async (req, res) => {
  try {
    const { id } = req.params;

    const inquiry = await Inquiry.findById(id)
      .populate('writer')  // 작성자 정보 가져오기
      .populate('mdInquiryId')  // MD 상품 정보
      .populate('auctionInquiryId')  // 경매 상품 정보
      .exec();

    if (!inquiry) {
      return res.status(404).json({ message: "문의 내역이 존재하지 않습니다." });
    }

    res.status(200).json({ inquiry });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error });
  }
};


const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, form, content } = req.body;
    
    // 문의 내역 수정
    const updatedInquiry = await Inquiry.findByIdAndUpdate(
      id,
      { type, form, content, updatedAt: getCurrentTime() },
      { new: true } // 수정된 내용을 반영
    );

    if (!updatedInquiry) {
      return res.status(404).json({ message: "문의 내역이 존재하지 않습니다." });
    }

    res.status(200).json({
      message: "문의 내역이 수정되었습니다.",
      inquiry: updatedInquiry,
    });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error });
  }
};


const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedInquiry = await Inquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "문의 내역이 존재하지 않습니다." });
    }

    res.status(200).json({ message: "문의 내역이 삭제되었습니다." });
  } catch (error) {
    res.status(500).json({ message: "서버 오류", error });
  }
};



export { seedInquiry, createInquiry, getAllInquiries, getInquiryById, updateInquiry, deleteInquiry };