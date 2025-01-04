import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonReservationSchema = new Schema 
({
    id : {type : Number},
    classId : {type: Schema.Types.ObjectId, ref : "Lesson"},
    userId : { type: Schema.Types.ObjectId, ref: "User"},
    name :  {type: Schema.Types.ObjectId, ref: "User"},
    phoneNumber : { type : String, required : true},
    email : {type : String, required : true},
    memo : {type : String, required : true} ,
    date : {
        type:Date , required : true
    },
    createAt : {type : String, default : getCurrentTime},
})

export default model ("LessonResevation" , lessonReservationSchema, "reservation")