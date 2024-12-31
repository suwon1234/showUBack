import { model, Schema } from "mongoose"

const auctionSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  time: { type: String, required: true },
  auctionId: { type: String, required: true },
  count: { type: Number, required: true }, // 입찰 기록
  unit: { type: Number, required: true }, // 입찰 단위
  bid: { type: Number, required: true }, // 입찰 희망가
  finalPrice: { type: Number, required: true }, // 예상 구매가
  image: { type: String, required: true },
  image_detail: { type: String, required: true },
  description: { type: String, required: true },
  ishearted: {type: Boolean, required: true, default: false}
});

export default model("Auction", auctionSchema, "auction");