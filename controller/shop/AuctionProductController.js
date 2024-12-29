import AuctionProduct from '../models/shop/AuctionProductSchema.js';

// 모든 상품 조회
export const getAllAuctionProducts = async (req, res) => {

  try {
    const auctionProducts = await AuctionProduct.find(); 
    res.status(200).json({
      success: true,
      message: "경매 상품을 조회했습니다.",
      data: auctionProducts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "경매 상품을 찾을 수 없습니다.",
      error: error.message
    });
  }
};

// 특정 상품 조회
export const getAuctionProductById = async (req, res) => {
  const { id } = req.params;  // 경매 상품 ID 추출
  try {
    const auctionProduct = await AuctionProduct.findOne({ _id: id }); 
    if (!auctionProduct) {
      return res.status(404).json({
        success: false,
        message: "경매 상품을 찾을 수 없습니다."
      });
    }
    res.status(200).json({
      success: true,
      message: "경매 상품을 조회했습니다.",
      data: auctionProduct
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "경매 상품을 찾을 수 없습니다.",
      error: error.message
    });
  }
};

// 상품 추가
export const addAuctionProduct = async (req, res) => {
  const { name, number, time, image, unit, pay, record } = req.body;  // 요청 본문에서 경매 상품 데이터 추출

  // 필수 데이터 확인
  if (!name || !number || !time || !image || !unit || !pay || !record) {
    return res.status(400).json({
      success: false,
      message: "모든 필드를 입력해야 합니다.",
    });
  }

  try {
    const newAuctionProduct = new AuctionProduct({
      name,
      number,
      time,
      image,
      unit,
      pay,
      record,
    });

    await newAuctionProduct.save();
    res.status(201).json({
      success: true,
      message: "경매 상품이 성공적으로 추가되었습니다."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "경매 상품을 추가할 수 없습니다.",
      error: error.message,
    });
  }
};

// 경매 상품 수정
export const updateAuctionProduct = async (req, res) => {
  const { id } = req.params;
  const { name, number, time, image, unit, pay, record } = req.body;

  try {
    const updatedAuctionProduct = await AuctionProduct.findByIdAndUpdate(
      id,
      { name, number, time, image, unit, pay, record },
      { new: true }
    );

    if (!updatedAuctionProduct) {
      return res.status(404).json({
        success: false,
        message: "경매 상품을 찾을 수 없습니다."
      });
    }

    res.status(200).json({
      success: true,
      message: "경매 상품이 수정되었습니다.",
      data: updatedAuctionProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "경매 상품을 수정할 수 없습니다.",
      error: error.message,
    });
  }
};

// 경매 상품 삭제
export const deleteAuctionProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAuctionProduct = await AuctionProduct.findByIdAndDelete(id);
    if (!deletedAuctionProduct) {
      return res.status(404).json({
        success: false,
        message: "경매 상품을 찾을 수 없습니다."
      });
    }

    res.status(200).json({
      success: true,
      message: "경매 상품이 삭제되었습니다."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "경매 상품을 삭제할 수 없습니다.",
      error: error.message
    });
  }
};

// export {}