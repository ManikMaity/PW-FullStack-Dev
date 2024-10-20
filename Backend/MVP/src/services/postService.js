import { uploadImageInCloudinary } from "../config/cloudinaryConfig.js";
import { createPost, getPaginatedPosts } from "../repositories/postRepository.js";

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

export async function getPaginatedPostsService(pageno = 1, limit = 10) {
    try{
        const response  = await getPaginatedPosts(pageno, limit);
    return response;
    }
    catch(err){
        throw new Error(err)
    }
    
}