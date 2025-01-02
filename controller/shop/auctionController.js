import Auction from '../../models/shop/auctionSchema.js'

const seedAuctionProducts = async (req, res) => {

  const auctionData = [
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "111ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명1",
      image: "/images/shop/auction/auction1.jpg",
      image_detail: "/images/shop/auction/auction1-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "112ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명2",
      image: "/images/shop/auction/auction2.jpg",
      image_detail: "/images/shop/auction/auction2-1.jpg",
      ishearted: false
    },
    {
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "113ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명3",
      image: "/images/shop/auction/auction3.jpg",
      image_detail: "/images/shop/auction/auction3-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 키링",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "114ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명4",
      image: "/images/shop/auction/auction4.jpg",
      image_detail: "/images/shop/auction/auction4-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 배지1",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "115ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명5",
      image: "/images/shop/auction/auction5.jpg",
      image_detail: "/images/shop/auction/auction5-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "116ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명6",
      image: "/images/shop/auction/auction6.jpg",
      image_detail: "/images/shop/auction/auction6-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "117ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명7",
      image: "/images/shop/auction/auction7.jpg",
      image_detail: "/images/shop/auction/auction7-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "118ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명8",
      image: "/images/shop/auction/auction8.jpg",
      image_detail: "/images/shop/auction/auction8-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "119ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명9",
      image: "/images/shop/auction/auction9.jpg",
      image_detail: "/images/shop/auction/auction9-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "120ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명10",
      image: "/images/shop/auction/auction10.jpg",
      image_detail: "/images/shop/auction/auction10-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "121ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명11",
      image: "/images/shop/auction/auction11.jpg",
      image_detail: "/images/shop/auction/auction11-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "123ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명12",
      image: "/images/shop/auction/auction12.jpg",
      image_detail: "/images/shop/auction/auction12-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "124ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명13",
      image: "/images/shop/auction/auction13.jpg",
      image_detail: "/images/shop/auction/auction13-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "125ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명14",
      image: "/images/shop/auction/auction14.jpg",
      image_detail: "/images/shop/auction/auction14-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "126ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명15",
      image: "/images/shop/auction/auction15.jpg",
      image_detail: "/images/shop/auction/auction15-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "127ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명16",
      image: "/images/shop/auction/auction16.jpg",
      image_detail: "/images/shop/auction/auction16-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "128ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명17",
      image: "/images/shop/auction/auction17.jpg",
      image_detail: "/images/shop/auction/auction17-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "129ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명18",
      image: "/images/shop/auction/auction18.jpg",
      image_detail: "/images/shop/auction/auction18-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "130ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명19",
      image: "/images/shop/auction/auction19.jpg",
      image_detail: "/images/shop/auction/auction19-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "131ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명20",
      image: "/images/shop/auction/auction20.jpg",
      image_detail: "/images/shop/auction/auction20-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "132ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명21",
      image: "/images/shop/auction/auction21.jpg",
      image_detail: "/images/shop/auction/auction21-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "133ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명22",
      image: "/images/shop/auction/auction22.jpg",
      image_detail: "/images/shop/auction/auction22-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "134ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명23",
      image: "/images/shop/auction/auction23.jpg",
      image_detail: "/images/shop/auction/auction23-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "135ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명24",
      image: "/images/shop/auction/auction24.jpg",
      image_detail: "/images/shop/auction/auction24-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "136ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명25",
      image: "/images/shop/auction/auction25.jpg",
      image_detail: "/images/shop/auction/auction25-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "137ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명26",
      image: "/images/shop/auction/auction26.jpg",
      image_detail: "/images/shop/auction/auction26-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "138ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명27",
      image: "/images/shop/auction/auction27.jpg",
      image_detail: "/images/shop/auction/auction27-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 프로그램북 스페셜 에디션",
      category: "뮤지컬",
      time: "1일 5시간 58분 23초",
      auctionId: "139ABC",
      count: 60,
      unit: 1000,
      bid: 166000,
      finalPrice: 166000,
      description: "상세 설명28",
      image: "/images/shop/auction/auction28.jpg",
      image_detail: "/images/shop/auction/auction28-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 금속 마그넷",
      category: "영화",
      time: "20시간 47분 23초",
      auctionId: "140ABC",
      count: 88,
      unit: 1000,
      bid: 183000,
      finalPrice: 183000,
      description: "상세 설명29",
      image: "/images/shop/auction/auction29.jpg",
      image_detail: "/images/shop/auction/auction29-1.jpg",
      ishearted: false
    },
    { 
      name: "베르사유의 장미 고블렛",
      category: "연극",
      time: "9시간 12분 06초",
      auctionId: "218ABC",
      count: 23,
      unit: 1000,
      bid: 94000,
      finalPrice: 94000,
      description: "상세 설명30",
      image: "/images/shop/auction/auction30.jpg",
      image_detail: "/images/shop/auction/auction30-1.jpg",
      ishearted: false
    },

  ];
  

// 경매 상품 삽입
try {
  const insertedAucitonProducts = await Auction.insertMany(auctionData);
  console.log("경매 상품 데이터가 삽입되었습니다:", insertedAucitonProducts);
  res.status(201).json({
    message: "경매 상품 데이터가 성공적으로 삽입되었습니다.",
    insertedAucitonProducts,
  });
} catch (error) {
  console.error("경매 상품 삽입 실패: ", error.message);
  res.status(500).json({
    message: "경매 상품 데이터 삽입 중 오류가 발생했습니다.",
    error: error.message,
  });
}
}


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
  try {
    const { id } = req.params; 
    const product = await Auction.findOne({ _id: id }); 

    if (!product) {
      return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
    }

    res.json(product); 
  } catch (error) {
    console.error("상품 상세 조회 오류:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};

export { seedAuctionProducts, getAuctionProduct, getAuctionProductById };