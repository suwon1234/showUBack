import { Schema , model} from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const CommunityWriteSchema = new Schema({

    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    file : { type: String, required: true },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
    likes: { type: Number, default: 0 }, // 좋아요 수
    userInfo: { type: Schema.Types.ObjectId , ref : 'CommunityWrite'}, 
},

);


export default model('CommunityWrite', CommunityWriteSchema, 'communityWrite');
