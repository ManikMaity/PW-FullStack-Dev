import PostModel from "../Model/post.model.js"

export const createPost = async (content, userId, image) => {
    try{
        const post = await PostModel.create({
            postContent : content,
            user : userId,
            image : image
        })
        console.log("Post created successfully.")
    }
    catch(err){
        throw new Error(err)
    }
}


export const findAllPost = async () => {
    try{
        const post = await PostModel.find({})
        return post
    }
    catch(err){
        console.log(err)
    }
}


export const getPaginatedPosts = async (page, limit) => {
    try{
        const post = await PostModel.find().skip((page - 1) * limit).limit(limit);
        return post;
    }
    catch(err){
        throw new Error(err)
        console.log(err)
    }
}


export const findPostById = async (id) => {
    try{
        const post = await PostModel.findById(id)
        return post
    }
    catch(err){
        console.log(err)
    }
}