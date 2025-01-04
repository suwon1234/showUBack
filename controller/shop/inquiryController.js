import MdInquiry from "../../models/shop/mdInquirySchema.js";  // inquiry 스키마 임포트

// 문의 등록 처리 함수
const createInquiry = async (req, res) => {
  try {
    const { type, form, title, content, selectedAlarm, isAgreed, mdName, category } = req.body;
    
    // 필수 항목 체크
    if (!type || !form || !title || !content || !isAgreed) {
      return res.status(400).json({ message: "모든 필드를 입력해주세요." });
    }

    // 새로운 문의 데이터 생성
    const newInquiry = new MdInquiry({
      type,
      form,
      title,
      content,
      selectedAlarm,
      isAgreed,
      mdName,        // 상품명 (옵션)
      category: category || 'md',  // 카테고리 (기본값: md)
    });

    // DB에 저장
    const savedInquiry = await newInquiry.save();

    // 저장 성공 시 응답
    return res.status(201).json({ message: "문의가 등록되었습니다!", inquiry: savedInquiry });
  } catch (error) {
    console.error("문의 등록 오류: ", error);
    return res.status(500).json({ message: "서버 오류, 문의 등록 실패." });
  }
};

// 문의 리스트 조회 함수
const getInquiryList = async (req, res) => {
  try {
    // DB에서 문의 내역 조회 (가장 최신 것부터)
    const inquiryList = await MdInquiry.find().sort({ createdAt: -1 });

    // 조회된 문의 내역 반환
    return res.status(200).json({ inquiryList });
  } catch (error) {
    console.error("문의 리스트 조회 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 리스트 조회 실패." });
  }
};

export { createInquiry, getInquiryList };
