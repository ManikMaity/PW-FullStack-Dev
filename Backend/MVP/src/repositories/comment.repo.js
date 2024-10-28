// create a new comment

import CommentModel from "../Model/comment.model.js";

export async function createCommentById(postId, userId, content) {
    try {
        const comment = CommentModel.create({
            content,
            postId,
            userId
        })

        return comment
    }
    catch (err) {
        throw err;
    }
}