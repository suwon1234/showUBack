import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const userSchema = new Schema({
    email: { type: String, required : true, unique : true },
    password: { type: String },
    name: { type: String },
    phone : { type : String },
    provider : { type : String },
    role : {
        type : String,
        enum : ['user', 'export'],
        default : 'user'
    },
    isUpgradeRequested : {
        type : Boolean,
        default : false
    },
    upgradeRequestStatus : {
        type : String,
        enum : ['대기', '승인', '거절'],
        default : '대기'
    },
    upgradeRequestedAt : { type : String, default : null },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

// model("객체명", 스키마, "컬렉션(테이블)명");
export default model("User", userSchema, "users");