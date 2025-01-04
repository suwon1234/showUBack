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
      mdName,       
      category: category || 'md', 
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

// 문의 내역 조회
const getInquiryList = async (req, res) => {
  try {
    // DB에서 문의 내역 조회 
    const inquiryList = await MdInquiry.find().sort({ createdAt: -1 });

    // 조회된 문의 내역 반환
    return res.status(200).json({ inquiryList });
  } catch (error) {
    console.error("문의 리스트 조회 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 내역 조회 실패." });
  }
};

// 상세 문의 내역 조회 함수
const getInquiryDetail = async (req, res) => {
  try {
    const { id } = req.params; // 조회할 문의의 ID

    // DB에서 ID에 해당하는 문의 찾기
    const inquiry = await MdInquiry.findById(id);

    if (!inquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    // 조회 성공 시 응답
    return res.status(200).json({ inquiry });
  } catch (error) {
    console.error("상세 문의 내역 조회 오류:", error);
    return res.status(500).json({ message: "서버 오류, 상세 문의 내역 조회 실패." });
  }
};


// 문의 수정 
const updateInquiry = async (req, res) => {
  try {
    const { id } = req.params; // 수정할 문의의 ID
    const updateData = req.body; // 클라이언트에서 보낸 수정 데이터

    // DB에서 해당 문의 찾고 업데이트
    const updatedInquiry = await MdInquiry.findByIdAndUpdate(id, updateData, {
      new: true, // 업데이트된 데이터를 반환
      runValidators: true, // 모델 스키마의 유효성 검증
    });

    if (!updatedInquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    // 성공적으로 수정 후 응답
    return res.status(200).json({ message: "문의가 성공적으로 수정되었습니다.", inquiry: updatedInquiry });
  } catch (error) {
    console.error("문의 수정 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 수정 실패." });
  }
};


// 문의 삭제 처리 함수
const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params; // 삭제할 문의의 ID

    // DB에서 해당 문의 삭제
    const deletedInquiry = await MdInquiry.findByIdAndDelete(id);

    if (!deletedInquiry) {
      return res.status(404).json({ message: "해당 문의를 찾을 수 없습니다." });
    }

    // 삭제 성공 시 응답
    return res.status(200).json({ message: "문의가 성공적으로 삭제되었습니다." });
  } catch (error) {
    console.error("문의 삭제 오류:", error);
    return res.status(500).json({ message: "서버 오류, 문의 삭제 실패." });
  }
};


export { createInquiry, getInquiryList, getInquiryDetail, updateInquiry, deleteInquiry };

