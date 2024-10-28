import { createCommentService } from "../services/commentService.js"

export async function check(req, res) {
    res.json({
        msg : "Comment router is working✔️"
    })    
}


export async function createCommentController(req, res) {
    try {
        const { postId, content } = req.body
        const userId = req.user._id
        const comment = await createCommentService(content, postId, userId);
        res.json({
            success : true,
            message : "Comment created successfully",
            data : comment
        })
    }
    catch(err) {
        console.log(err)
        if (err.status) {
            res.status(err.status).json({
                success : false,
                message : err.message
            })
        }
        else {
            res.status(500).json({
                success : false,
                message : err.message
            })
        }
    } 
}