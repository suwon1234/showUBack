import Audition from "../../models/audition/auditionSchema.js";


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
