import Cart from "../../models/shop/cartSchema.js";
import Md from "../../models/shop/mdSchema.js"; 

// 장바구니 상품 추가
const addItemToCart = async (req, res) => {
  const { userId, productId, quantity, option } = req.body;

  // 상품이 존재하는지 확인 (Md 사용)
  const product = await Md.findById(productId);
  if (!product) {
    return res.status(404).json({ message: "상품을 찾을 수 없습니다." });
  }

  // 사용자의 장바구니를 찾거나 새로 생성
  let cart = await Cart.findOne({ userId });
  if (!cart) {
    cart = await Cart.create({ userId, items: [{ productId, quantity, option, price: product.price }] });
  } else {
    const existingItemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (existingItemIndex > -1) {
      // 이미 장바구니에 존재하면 수량만 업데이트
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // 장바구니에 새로운 상품 추가
      cart.items.push({ productId, quantity, option, price: product.price });
    }
    await cart.save();
  }

  return res.status(200).json(cart);
};

// 장바구니에서 상품 삭제
const deleteItemFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  const cart = await Cart.findOne({ userId });
  if (!cart) {
    return res.status(404).json({ message: "장바구니를 찾을 수 없습니다." });
  }

  cart.items = cart.items.filter(item => item.productId.toString() !== productId);
  await cart.save();

  return res.status(200).json(cart);
};

export { addItemToCart, deleteItemFromCart };
