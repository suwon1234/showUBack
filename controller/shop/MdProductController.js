import MdProduct from '../models/shop/MdProductSchema.js'

// 모든 상품 조회
export const getAllProducts = async (req, res) => {

  try {
    const products = await MdProduct.find(); 
    res.status(200).json({
      success: true,
      message: "MD 상품을 조회했습니다.",
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "MD 상품을 찾을 수 없습니다.",
      error: error.message
    });
  }
};

// 특정 상품 조회
const { id } = req.params;
try {
  const product = await MdProduct.findOne({ id });
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "MD 상품을 찾을 수 없습니다."
    });
  }
  res.status(200).json({
    success: true,
    message: "MD 상품을 조회했습니다.",
    data: product
  });
} catch (error) {
  res.status(500).json({
    success: false,
    message: "MD 상품을 찾을 수 없습니다.",
    error: error.message
  });
};

