import News from "../../models/news/newsSchema.js";

// 뉴스 전체 목록 조회
const getAllNews = async (req, res) => {
  try {
    const news = await News.find(); 
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
};

// 특정 뉴스 조회
const getNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: "뉴스를 찾을 수 없습니다." });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: "서버 오류가 발생했습니다.", error: error.message });
  }
};


export { getAllNews, getNewsById };
