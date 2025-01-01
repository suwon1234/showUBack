import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const teamSchema = new Schema ({
    userId : {type: Schema.Types.ObjectId, ref :"User"},
    teamId : { type : Number},
    teamName : {type : String, unique : true},
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
    status: { type: String, enum: ['매칭 완료', '매칭 대기'], default: '매칭 대기' }, //팀 매칭 승인 상태
    count : {type : Number}, 
    likeCount : {type : Number},
    createAt : {type: String, default :getCurrentTime },
    updateAt : {type : String, default : getCurrentTime},
})

export default model ("Team", teamSchema, "teams")