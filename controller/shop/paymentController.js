import Payment from '../../models/shop/paymentSchema.js'

// 결제 상품 삭제
const removeFromPayment = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const payment = await Payment.findOne({ userId });
    if (!payment) {
      return res.status(404).json({ message: "결제 목록이 비어 있습니다." });
    }
    payment.products = payment.products.filter(item => item.productId !== productId);
    await payment.save();
    res.status(200).json(payment);
  } catch (error) {
    console.error("결제 상품 삭제 오류:", error);
    res.status(500).json({ message: "결제 상품 삭제 중 오류가 발생했습니다." });
  }
};

export { removeFromPayment };