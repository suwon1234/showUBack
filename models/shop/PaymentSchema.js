import { model, Schema } from "mongoose";

const paymentSchema = new Schema({
  product: {
    // id: { type: Schema.Types.ObjectId, ref: "Md", required: true }, 
    name: { type: String, ref: "Md", required: true },
    price: { type: Number, ref: "Md", required: true }, 
    // option: { type: String, ref: "Md" },
    quantity: { type: Number, required: true, default: 1 }, 
  }
  ,
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['주문완료', '배송중', '배송완료', '취소'], default: '주문완료' },
  paymentMethod: { type: String, enum: ['신용카드', '무통장입금', '네이버페이', '카카오페이'], required: true },
  deliveryFee: { type: Number, default: 3000 }, 
  discount: { type: Number, default: 0 }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model("Payment", paymentSchema, "payment")