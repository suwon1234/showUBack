import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teanJoinSchema = new Schema ({
    userId : {type : String, ref: "users"},
    applicationNotice : {type : String},
    createAt : {type : String, default : getCurrentTime}
})

export default model ("TeamJoin", teanJoinSchema, "teamjoins")