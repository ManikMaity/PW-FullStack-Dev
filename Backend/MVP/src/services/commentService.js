import { createCommentById, getCommentsByPostId } from "../repositories/comment.repo.js";

export async function createCommentService(content, postId, userId) {
    try {
        if (content.trim() == "") {
            throw {
                status : 400,
                message : "Comment content is required",
                success : false
            }
        }
        const comment = await createCommentById(postId, userId, content);
        return comment;

    }
    catch (err) {
        throw err;
    }
}

export async function getCommentsService(postId) {
    try {
        const comments = await getCommentsByPostId(postId);
        return comments;
    }
    catch(err){
        throw err
    }
}