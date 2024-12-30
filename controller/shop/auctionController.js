import Auction from '../../models/shop/auctionSchema.js'

const seedAuctionProducts = async (req, res) => {

  const auctionDate = [
    { 
      id: "1",
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "123ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      image: "/images/shop/auction/auction1.jpg",
      image_detail: "/images/shop/auction/auction1-1.jpg",
      description: "상세 설명1",
      ishearted: false
    },
    { 
      id: "2",
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "456ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      image: "/images/shop/auction/auction2.jpg",
      image_detail: "/images/shop/auction/auction2-1.jpg",
      description: "상세 설명2",
      ishearted: false
    },
    { 
      id: "3",
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "789ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      image: "/images/shop/auction/auction3.jpg",
      image_detail: "/images/shop/auction/auction3-1.jpg",
      description: "상세 설명3",
      ishearted: false
    },
    { 
      id: "4",
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "123ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      image: "/images/shop/auction/auction1.jpg",
      image_detail: "/images/shop/auction/auction1-1.jpg",
      description: "상세 설명4",
      ishearted: false
    },
    { 
      id: "5",
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "456ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      image: "/images/shop/auction/auction2.jpg",
      image_detail: "/images/shop/auction/auction2-1.jpg",
      description: "상세 설명5",
      ishearted: false
    },
    { 
      id: "6",
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "789ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      image: "/images/shop/auction/auction3.jpg",
      image_detail: "/images/shop/auction/auction3-1.jpg",
      description: "상세 설명6",
      ishearted: false
    },
    { 
      id: "7",
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "123ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      image: "/images/shop/auction/auction1.jpg",
      image_detail: "/images/shop/auction/auction1-1.jpg",
      description: "상세 설명7",
      ishearted: false
    },
    { 
      id: "8",
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "456ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      image: "/images/shop/auction/auction2.jpg",
      image_detail: "/images/shop/auction/auction2-1.jpg",
      description: "상세 설명8",
      ishearted: false
    },
    { 
      id: "9",
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "789ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      image: "/images/shop/auction/auction3.jpg",
      image_detail: "/images/shop/auction/auction3-1.jpg",
      description: "상세 설명9",
      ishearted: false
    }
  ];
  
  // 경매 상품 삽입
  try {
    const insertedAuctionProducts = await Auction.insertMany(auctionDate);

    // MongoDB에서 _id를 문자열로 변환하여 응답
    const productsWithStringId = insertedAuctionProducts.map(product => ({
      ...product.toObject(),
      id: product._id.toString(), // _id를 문자열로 변환하여 id로 추가
    }));

    console.log("경매 상품 데이터가 삽입되었습니다:", productsWithStringId);
    res.status(201).json({
      message: "경매 상품 데이터가 성공적으로 삽입되었습니다.",
      insertedAuctionProducts: productsWithStringId,
    });
  } catch (error) {
    console.error("경매 상품 삽입 실패:", error.message);
    res.status(500).json({
      message: "경매 상품 데이터 삽입 중 오류가 발생했습니다.",
      error: error.message,
    });
  }
};


// 경매 상품 조회
const getAuctionProduct = async (req, res) => {
  try {
    const products = await Auction.find(); 
    res.status(200).json(products);
  } catch (error) {
    console.error("상품 데이터를 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("상품 데이터를 가져오는 데 실패했습니다.");
  }
}


// 경매 상품 상세 조회
const getAuctionProductById = async (req, res) => {
  const { id } = req.params; // URL 파라미터에서 id를 추출
  try {
    const product = await Auction.findById(ObjectId(id)); 
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }
  } catch (error) {
    console.error("상품 데이터를 가져오는 데 실패했습니다.", error.message);
    res.status(500).send("상품 데이터를 가져오는 데 실패했습니다.");
  }
}


export { seedAuctionProducts, getAuctionProduct, getAuctionProductById };