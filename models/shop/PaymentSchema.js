import { model, Schema } from "mongoose"

const PaymentSchema = new Schema(
  {
    // 주문 상품 정보
    orderItems: [ 
      {
        productId: { type: Schema.Types.ObjectId, ref: 'MdProduct', required: true }, 
        name: { type: String, required: true },
        price: { type: Number, required: true }, 
        quantity: { type: Number, required: true, default: 1 }, 
      },
    ],

    // 주문자 정보
    customerInfo: { 
      name: { type: String, required: true }, 
      email: { type: String, required: true }, 
      phone: { type: String, required: true },
    },

    // 배송지 정보
    shippingInfo: { 
      recipient: { type: String, required: true }, 
      postalCode: { type: String, required: true },
      address1: { type: String, required: true }, 
      address2: { type: String }, 
      phone: { type: String, required: true }, 
      isDefault: { type: Boolean, default: false },
    },

    // 결제 금액 
    paymentDetails: { 
      productTotal: { type: Number, required: true }, 
      deliveryFee: { type: Number, required: true }, 
      discountAmount: { type: Number, default: 0 }, 
      totalAmount: { type: Number, required: true }, 
    },

    // 결제 수단
    paymentMethod: {
      type: String, 
      enum: ['card', 'bank_transfer', 'toss_pay', 'naver_pay', 'kakao_pay'], 
      required: true,
    },

    // 결제 날짜
    createdAt: { type: Date, default: Date.now }, 

  });

export default model("Payment", PaymentSchema, "payment");