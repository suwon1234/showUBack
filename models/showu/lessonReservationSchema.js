import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonReservationSchema = new Schema 
({
    index : {type : Number},
    classId : {type : String, ref : "lessons"},
    userId : { type : String, ref: "users"},
    userName :  {type : String, ref: "users"},
    phoneNumber : { type : String, required : true},
    email : {type : String, required : true},
    memo : {type : String, required : true} ,
    date : {
        year : {type : String},
        month : {type : String},
        day : {type : String}
    },
    createAt : {type : String, default : getCurrentTime},
      
})

export default model ("LessonResevation" , lessonReservationSchema, "reservation")