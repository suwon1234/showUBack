import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonSchema = new Schema ({
    id : { type : Number, unique : true}, // 레슨 고유 번호 (자동생성) 인덱스 
    userId : { type: Schema.Types.ObjectId, ref :"User"}, // 유저 아이디
    userName : { type: Schema.Types.ObjectId, ref : "User"}, //강사 이름
    lessonTumbnail : { type : String, required : true}, //썸네일  이미지 경로
    lessonName : { type : String, required : true}, //레슨 이름 
    callTime : { type : String, required: true}, // 응대 가능시간
    category : { type : String, enum:["음악", "연기", "마술"], required : true}, // 레슨 카테고리
    lessonAddress : {
        addressSi : { type : String},
        addressGuGun : { type : String},
        addressDongLi : { type : String},
    },
    lessonAddressDetail : { type : String, required : true}, // 상세 주소
    lessonDetail :{ type :  String}, // 레슨 상세설명
    history : { //경력
        personal : {type : String}, //이력
        recode : {
            record1 : {recordIndex : {type : Number}, recordHistoryTitle : { type : String }, periodDetails : { type : String }, periodMonth : { type : String }, recordedSummary :{ type : String }},
            record2 : {recordIndex : {type : Number}, recordHistoryTitle : { type : String }, periodDetails : { type : String }, periodMonth : { type : String }, recordedSummary :{ type : String }},
            record3 : {recordIndex : {type : Number}, recordHistoryTitle : { type : String }, periodDetails : { type : String }, periodMonth : { type : String }, recordedSummary :{ type : String }},
          },
        education : { educationTitle : { type : String }, educationPeriod : { type : String }, educationSubject : { type : String }}  //학력
    },
    portfolios : {
      portfolio1 :{ index : {type : Number}, portfolioTitle : { type : String }, portfolioURL : { type : String  }},
      portfolio2 :{ index : {type : Number}, portfolioTitle : { type : String }, portfolioURL : { type : String  }},
      portfolio3 :{ index : {type : Number}, portfolioTitle : { type : String }, portfolioURL : { type : String  }},
      portfolio4 :{ index : {type : Number}, portfolioTitle : { type : String }, portfolioURL : { type : String  }},
    },
    media : {
        media1 :  { index : {type : Number}, mediaURL :  { type : String },},
        media2 :  { index : {type : Number}, mediaURL :  { type : String },},
        media3 :  { index : {type : Number}, mediaURL :  { type : String },},
        
    },

    etcAnnouncement : { 
        qna1 : { index :  {type : Number}, question : { type : String }, answer :{ type : String }},
        qna2 : { index :  {type : Number}, question : { type : String }, answer : { type : String }},
    },
    count : {type : Number}, //조회수
    likeCount : {type : Number, default : 0}, //좋아요 수
    createAt : {type : String, default : getCurrentTime},
    updateAt : {type : String, default : getCurrentTime},
})

export default model ("Lesson", lessonSchema , "lessons")