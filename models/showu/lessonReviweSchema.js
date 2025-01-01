import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonReviweSchema = new Schema ({
    classId : { type : Number, ref : "Lesson"},
    reviews : {
        userId : { type : String, ref : "User"},
        name : { type : String, ref :"User"},
        category : {type : String, ref : "Lesson"},
        score : {type : Number, default : 5},
        review : {type : String},
        createAt : {type : String, default : getCurrentTime},
        updateAt : {type : String, default : getCurrentTime},
    }
       
})

export default model ("LessonReview", lessonReviweSchema , "lessonreviews")