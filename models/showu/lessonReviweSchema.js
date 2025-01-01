import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonReviweSchema = new Schema ({
    classId : { type : Number, ref : "lessons"},
    reviews : {
        userId : { type : String, ref : "users"},
        name : { type : String, ref :"users"},
        category : {type : String, ref : "lessons"},
        score : {type : Number, default : 5},
        review : {type : String},
        createAt : {type : String, default : getCurrentTime},
        updateAt : {type : String, default : getCurrentTime},
    }
       
})

export default model ("LessonReview", lessonReviweSchema , "lessonreviews")