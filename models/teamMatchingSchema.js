import { Schema, model } from "mongoose";

const teamMatchingSchema = new Schema({
    teamLeader : { type : Schema.Types.ObjectId, ref : 'User' },
    members : { type : Schema.Types.ObjectId, ref : 'User' },
    teamName: { type: String, required: true },
    categoty : { type : String },
    teamPhoto : { type : String, default : null },
    teamIntro : { type : String, required : true },
    activityPeriod : {
      start : { type : Dape, required : true }, //팀 활동 시작일
      end : { type : Dape, required : true }, //팀 활동 종료일
    },
    status: { type: String, enum: ['매칭 완료', '매칭 대기'], default: '매칭 대기' }, //팀 매칭 승인 상태
    likeCount: { type: Number, default: 0 },
    createdAt: { type: String, default: getCurrentTime },
    updatedAt: { type: String, default: getCurrentTime },
});

export default model("TeamMatching", teamMatchingSchema, "teamMatching")
