import { createPostService } from "../services/postService.js";

export async function postController(req, res) {
    try{
        const {content, userId, image} = req.body;
        await createPostService(content, userId, image);
        res.json({msg : "Post created successfully"});
    }
    catch(err){
        res.status(500).json({msg : err.message});
    }

}