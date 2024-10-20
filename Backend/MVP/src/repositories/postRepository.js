import PostModel from "../Model/post.model.js"

export const createPost = async (content, userId, image, imageName) => {
    try{
        const post = await PostModel.create({
            postContent : content,
            user : userId,
            image : image,
            imageName : imageName
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


export const getPaginatedPosts = async (offset, limit) => {
    try{
        const post = await PostModel.find().sort({"createdAt" : -1}).skip(offset).limit(limit);
        return post;
    }
    catch(err){
        throw new Error(err)
        console.log(err)
    }
}

export const getTotalPosts = async () => {
    try{
        const post = await PostModel.countDocuments();
        return post
    }
    catch(err){
        console.log(err)
        throw new Error(err)
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

export async function deletePostById(id) {
    try{
       const data =  await PostModel.findByIdAndDelete(id);
        return data;
    }
    catch(err){
        throw new Error(err);
        
    }   
}

export async function updatePostById(id, data) {
    try{
        const responseData = await PostModel.findByIdAndUpdate(id, {
            $set : data}, {new : true});
        return responseData;
    }
    catch(err){
        throw new Error(err);
    }
    
}