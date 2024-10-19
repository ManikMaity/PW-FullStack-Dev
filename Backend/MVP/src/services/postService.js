import { uploadImageInCloudinary } from "../config/cloudinaryConfig.js";
import { createPost } from "../repositories/postRepository.js";

export async function createPostService (content, userId, image) {
    try{
        // Add cloudinary to upload image and get a url
        const imageUrl = await uploadImageInCloudinary(image);
        await createPost(content, userId, imageUrl);
    }
    catch(err){
        throw new Error(err)
    }
}