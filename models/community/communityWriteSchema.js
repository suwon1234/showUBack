import { Schema , model} from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const CommunityWriteSchema = new Schema({

    writeTitle: { type: String, required: true },
    WriteContent: { type: String, required: true },
    WriteCategory: { type: String, required: true },
    Writefile : { type: String, required: true },
    // createdAt: { type: String, default: getCurrentTime },
    // updatedAt: { type: String, default: getCurrentTime },
    likes: { type: Number, default: 0 }, // 좋아요 수
    userInfo: { type: Schema.Types.ObjectId , ref : 'User'}, 
},

);


export default model('CommunityWrite', CommunityWriteSchema, 'communityWrite');
