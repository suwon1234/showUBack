import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils";


const newsSchema = new Schema({
    title: { type: String, required: true }, // 뉴스 제목
    category: { type: String, enum: ["전체", "공연", "뮤지컬", "영화", "연극", "밴드"], required: false }, // 카테고리
    description: { type: String, required: false }, // 뉴스 설명
    content: { type: String, default: "내용이 없습니다."}, // 뉴스 상세 내용
    imageUrl: { type: String, required: true }, // 뉴스 이미지 URL
    createdAt: { type: String, default: getCurrentTime }, 
    updatedAt: { type: String, default: getCurrentTime } 

    // (인기순 리스트 작업 하게 될 시 추후 추가 예정)
    // likes: { type: Number, default: 0 }, // 좋아요
    // likedUsers: [{ type: Schema.Types.ObjectId , ref : 'User'}], // 좋아요를 누른 사용자 ID 
});

export default model("News", newsSchema, "news");
