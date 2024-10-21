import { uploadImageInCloudinary } from "../config/cloudinaryConfig.js";
import {
  createPost,
  getPaginatedPosts,
  getTotalPosts,
} from "../repositories/postRepository.js";

export async function createPostService(content, userId, image) {
  try {
    // Add cloudinary to upload image and get a url
    const imageUrl = await uploadImageInCloudinary(image);
    await createPost(content, userId, imageUrl);
  } catch (err) {
    throw new Error(err);
  }
}

export async function getPaginatedPostsService(offset, limit) {
  try {
    const posts = await getPaginatedPosts(offset, limit);
    const totalPosts = await getTotalPosts();
    const totalPages = Math.floor(totalPosts / limit);
    return {
      posts,
      totalPosts,
      totalPages,
    };
  } catch (err) {
    throw new Error(err);
  }
}
