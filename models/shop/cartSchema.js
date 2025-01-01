import { model, Schema } from "mongoose";

const cartSchema = new Schema({
  name: { type: Schema.Types.ObjectId, ref: 'User'},
  productName: [
    { type: Schema.Types.ObjectId, ref: 'Md', required: true }, // MD 상품명
    { type: Schema.Types.ObjectId, ref: 'Auction', required: true }, // 경매 상품명
  ],
  price: { type: Schema.Types.ObjectId, ref: 'Md', required: true }, // MD 가격
  finalPrice: { type: Schema.Types.ObjectId, ref: 'Auction', required: true }, // 경매 가격
  option: { type: Schema.Types.ObjectId, ref: 'Md' }, // MD 옵션
  quantity: { type: Schema.Types.ObjectId, ref: 'Md', required: true, default: 1 }, // MD 수량
  image: [
    { type: Schema.Types.ObjectId, ref: 'Md', required: true },
    { type: Schema.Types.ObjectId, ref: 'Auction', required: true },
  ]
});

export default model("Cart", cartSchema, "cart")