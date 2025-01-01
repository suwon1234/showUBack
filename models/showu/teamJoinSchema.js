import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamJoinSchema = new Schema ({
    userId : {type : String, ref: "User"},
    applicationNotice : {type : String},
    createAt : {type : String, default : getCurrentTime}
})

export default model ("TeamJoin", teamJoinSchema, "teamjoins")