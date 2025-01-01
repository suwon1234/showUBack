import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamSchema = new Schema ({
    teamName : {type : String, unique : true},
    teamId : { type : Number},
    teamThumbnail : {type : String},
    meetDay : {type : String},
    meetPeriod : {
	    time : { type : String},
	    timeDetail : {type : String}
    },

    ages : {type : String},
    gender : {type : String},
    averageSkill : { type : String},
    teamNotice : {type : String},
    userId :{type : String},
    count : {type : Number}, 
    likeCount : {type : Number},
    createAt : {type: String, default :getCurrentTime },
    updateAt : {type : String, default : getCurrentTime},
})

export default model ("Team", teamSchema, "teams")