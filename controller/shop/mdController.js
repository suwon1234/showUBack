import mongoose, { Types } from 'mongoose';
import Md from '../../models/shop/mdSchema.js';

const seedMdProducts = async (req, res) => {
  const mdData = [
    { 
      id: "1", 
      category: "뮤지컬", 
      name: "BEST상품 1", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명1", 
      ishearted: false 
    },
    { 
      id: "2", 
      category: "영화", 
      name: "BEST상품 2", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명2", 
      ishearted: false 
    },
    { 
      id: "3", 
      category: "연극", 
      name: "BEST상품 3", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명3", 
      ishearted: false 
    },
    { 
      id: "4", 
      category: "뮤지컬", 
      name: "BEST상품 4", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명4", 
      ishearted: false 
    },
    { 
      id: "5", 
      category: "영화", 
      name: "BEST상품 5", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명5", 
      ishearted: false 
    },
    { 
      id: "6", 
      category: "연극", 
      name: "BEST상품 6", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명6", 
      ishearted: false 
    },
    { 
      id: "7", 
      category: "뮤지컬", 
      name: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명7", 
      ishearted: false 
    },
    { 
      id: "8", 
      category: "영화", 
      name: "베르사유의 장미 금속 마그넷", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명8", 
      ishearted: false 
    },
    { 
      id: "9", 
      category: "연극", 
      name: "베르사유의 장미 고블렛", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명9", 
      ishearted: false 
    },
    { 
      id: "10", 
      category: "뮤지컬", 
      name: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명10", 
      ishearted: false 
    },
    { 
      id: "11", 
      category: "영화", 
      name: "베르사유의 장미 금속 마그넷", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명11", 
      ishearted: false 
    },
    { 
      id: "12", 
      category: "연극", 
      name: "베르사유의 장미 고블렛", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명12", 
      ishearted: false 
    },
    { 
      id: "13", 
      category: "뮤지컬", 
      name: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명13", 
      ishearted: false 
    },
    { 
      id: "14", 
      category: "영화", 
      name: "베르사유의 장미 금속 마그넷", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명14", 
      ishearted: false 
    },
    { 
      id: "15", 
      category: "연극", 
      name: "베르사유의 장미 고블렛", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명15", 
      ishearted: false 
    },
    { 
      id: "16", 
      category: "뮤지컬", 
      name: "베르사유의 장미 프로그램북 스페셜 에디션", 
      price: 65000, 
      image: "/images/shop/md/md1.jpg", 
      image_detail: "/images/shop/md/md1-1.jpg", 
      description: "상세 설명16", 
      ishearted: false 
    },
    { 
      id: "17", 
      category: "영화", 
      name: "베르사유의 장미 금속 마그넷", 
      price: 65000, 
      image: "/images/shop/md/md2.jpg", 
      image_detail: "/images/shop/md/md2-1.jpg", 
      description: "상세 설명17", 
      ishearted: false 
    },
    { 
      id: "18", 
      category: "연극", 
      name: "베르사유의 장미 고블렛", 
      price: 65000, 
      image: "/images/shop/md/md3.jpg", 
      image_detail: "/images/shop/md/md3-1.jpg", 
      description: "상세 설명18", 
      ishearted: false 
    }
  ];
  


  try {
    // MD 상품 삽입
    const insertedMdProducts = await Md.insertMany(mdData);

    const productsWithStringId = insertedMdProducts.map(product => ({
      ...product.toObject(),
      id: product._id.toString(), 
    }));

    console.log("경매 상품 데이터가 삽입되었습니다:", productsWithStringId);
    res.status(201).json({
      message: "경매 상품 데이터가 성공적으로 삽입되었습니다.",
      insertedMdProducts: productsWithStringId,
    });
  } catch (error) {
    console.error("경매 상품 삽입 실패:", error.message);
    res.status(500).json({
      message: "경매 상품 데이터 삽입 중 오류가 발생했습니다.",
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
