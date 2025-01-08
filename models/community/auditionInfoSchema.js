import { model, Schema } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";


const auditionInfoSchema = new Schema({
    title: { type: String, required: true }, 
    imageUrl: { type: String, required: true }, // 이미지 URL
    createdAt: { type: String, default: getCurrentTime }, 
    updatedAt: { type: String, default: getCurrentTime }  


});

export default model("AuditionInfo", auditionInfoSchema, "auditionInfo");