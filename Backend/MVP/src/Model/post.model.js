import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    postContent : {
        type : String,
        reqiured : true,  
    },
    user : {
        // type : Schema.ObjectId,
        type : String,
        // ref : "User",
        reqiured : true
    },
    image : {
        type : String,
        reqiured : true,
        // validate : {
        //     validator : (value) => {
        //         return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg))$/i.test(value)
        //     },
        //     message : "Invalid Image url"
        // }
    }

}, {timestamps : true});

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;