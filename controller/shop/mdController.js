import Md from '../../models/shop/mdSchema.js';

const seedMdProducts = async (req, res) => {
  const mdData = [
    { 
      category: "연극", 
      mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 15000, 
      image: "/images/shop/md/md1.jpg", 
      imageDetail: "/images/shop/md/md1-1.jpg", 
      ishearted: false,
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 금속 마그넷", 
      price: 13000, 
      image: "/images/shop/md/md2.jpg", 
      imageDetail: "/images/shop/md/md2-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 고블렛", 
      price: 18000, 
      image: "/images/shop/md/md3.jpg", 
      imageDetail: "/images/shop/md/md3-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 키링", 
      price: 17000, 
      image: "/images/shop/md/md4.jpg", 
      imageDetail: "/images/shop/md/md4-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 배지1", 
      price: 11000, 
      image: "/images/shop/md/md5.jpg", 
      imageDetail: "/images/shop/md/md5-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 배지2", 
      price: 11000, 
      image: "/images/shop/md/md6.jpg", 
      imageDetail: "/images/shop/md/md6-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 11000, 
      image: "/images/shop/md/md7.jpg", 
      imageDetail: "/images/shop/md/md7-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      mdName: "베르사유의 장미 스트랩 파우치", 
      price: 18000, 
      image: "/images/shop/md/md8.jpg", 
      imageDetail: "/images/shop/md/md8-1.jpg", 
      ishearted: false 
    },
    { 
      category: "연극", 
      nammdNamee: "2025 캘린더", 
      price: 12000,  
      image: "/images/shop/md/md9.jpg", 
      imageDetail: "/images/shop/md/md9-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 금속 마그넷", 
      price: 14000, 
      image: "/images/shop/md/md10.jpg", 
      imageDetail: "/images/shop/md/md10-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 배지1", 
      price: 12000, 
      image: "/images/shop/md/md11.jpg", 
      imageDetail: "/images/shop/md/md11-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 배지2", 
      price: 12000,  
      image: "/images/shop/md/md12.jpg", 
      imageDetail: "/images/shop/md/md12-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 배지3", 
      price: 12000,  
      image: "/images/shop/md/md13.jpg", 
      imageDetail: "/images/shop/md/md13-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 에코백", 
      price: 13000, 
      image: "/images/shop/md/md14.jpg", 
      imageDetail: "/images/shop/md/md14-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 메시지 엽서", 
      price: 10000, 
      image: "/images/shop/md/md15.jpg", 
      imageDetail: "/images/shop/md/md15-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 유리컵", 
      price: 19000,  
      image: "/images/shop/md/md16.jpg", 
      imageDetail: "/images/shop/md/md16-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 대본집", 
      price: 13000,  
      image: "/images/shop/md/md17.jpg", 
      imageDetail: "/images/shop/md/md17-1.jpg", 
      ishearted: false 
    },
    { 
      category: "영화", 
      mdName: "4월은 너의 거짓말 프로그램북", 
      price: 12000, 
      image: "/images/shop/md/md18.jpg", 
      imageDetail: "/images/shop/md/md18-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 거울 그립톡", 
      price: 13000, 
      image: "/images/shop/md/md19.jpg", 
      imageDetail: "/images/shop/md/md19-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 마스킹 테이프", 
      price: 6000,  
      image: "/images/shop/md/md20.jpg", 
      image_detail: "/images/shop/md/md20-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 글리터 코스터", 
      price: 17000,  
      image: "/images/shop/md/md21.jpg", 
      imageDetail: "/images/shop/md/md21-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 미니 티켓북", 
      price: 18000,  
      image: "/images/shop/md/md22.jpg", 
      imageDetail: "/images/shop/md/md22-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 금속 북마크", 
      price: 9000, 
      image: "/images/shop/md/md23.jpg", 
      imageDetail: "/images/shop/md/md23-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 접이식 우산", 
      price: 27000, 
      image: "/images/shop/md/md24.jpg", 
      imageDetail: "/images/shop/md/md24-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 엽서 (고은성VER.)", 
      price: 5000,  
      image: "/images/shop/md/md25.jpg", 
      imageDetail: "/images/shop/md/md25-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 엽서 (이해준VER.)", 
      price: 5000,  
      image: "/images/shop/md/md26.jpg", 
      imageDetail: "/images/shop/md/md26-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 엽서 (카이VER.)", 
      price: 5000,  
      image: "/images/shop/md/md27.jpg", 
      imageDetail: "/images/shop/md/md27-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)", 
      price: 19000,  
      image: "/images/shop/md/md28.jpg", 
      imageDetail: "/images/shop/md/md28-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)", 
      price: 19000, 
      image: "/images/shop/md/md29.jpg", 
      imageDetail: "/images/shop/md/md29-1.jpg", 
      ishearted: false 
    },
    { 
      category: "뮤지컬", 
      mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)", 
      price: 19000, 
      image: "/images/shop/md/md30.jpg", 
      imageDetail: "/images/shop/md/md30-1.jpg", 
      ishearted: false 
    },
  ];
  
  
// MD 상품 삽입
try {
  const insertedMdProducts = await Md.insertMany(mdData);
  console.log("MD 상품 데이터가 삽입되었습니다:", insertedMdProducts);
  res.status(201).json({
    message: "MD 상품 데이터가 성공적으로 삽입되었습니다.",
    insertedMdProducts,
  });
} catch (error) {
  console.error("MD 상품 삽입 실패: ", error.message);
  res.status(500).json({
    message: "MD 상품 데이터 삽입 중 오류가 발생했습니다.",
    error: error.message,
  });
}
}


// MD 상품 조회
const getMdProduct = async (req, res) => {
  try {
    const products = await Md.find(); // 모든 상품 조회
    res.status(200).json(products);
  } catch (error) {
    console.error("상품 데이터를 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("상품 데이터를 가져오는 데 실패했습니다.");
  }
};


// MD 상품 상세 조회
const getMdProductById = async (req, res) => {
  try {
    const { id } = req.params; 
    const product = await Md.findOne({ _id: id }); 
    console.log(product)

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    res.json(product); 
  } catch (error) {
    console.error("상품 상세 조회 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

export { seedMdProducts, getMdProduct, getMdProductById };
