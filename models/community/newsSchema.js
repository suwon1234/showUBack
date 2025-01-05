import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const newsSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, enum: ["전체", "공연", "뮤지컬", "영화", "연극", "밴드"], required: false },
    description: { type: String, required: false },
    content: { type: String, default: "내용이 없습니다." },
    imageUrl: { type: String, required: true },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
    info: { type: Schema.Types.ObjectId, ref: "NewsInfo" } // NewsInfo를 참조

    // (인기순 리스트 작업 하게 될 시 추후 추가 예정)
    // likes: { type: Number, default: 0 }, // 좋아요
    // likedUsers: [{ type: Schema.Types.ObjectId , ref : 'User'}], // 좋아요를 누른 사용자 ID 
});

export default model("News", newsSchema, "news");
