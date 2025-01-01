import { Schema, model } from "mongoose";
import { getCurrentTime } from "../../utils/utils.js";

const lessonReviweSchema = new Schema ({
    classId : { type: Schema.Types.ObjectId, ref : "Lesson"},
    reviews : {
        userId : { type: Schema.Types.ObjectId, ref : "User"},
        name : { type: Schema.Types.ObjectId, ref :"User"},
        category : {type: Schema.Types.ObjectId, ref : "Lesson"},
        score : {type : Number, default : 5},
        review : {type : String},
        createAt : {type : String, default : getCurrentTime},
        updateAt : {type : String, default : getCurrentTime},
    }
       
})

export default model ("LessonReview", lessonReviweSchema , "lessonreviews")