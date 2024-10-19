import UserModel from "../Model/user.model";

export async function findUserByEmail(email) {
    try{
        const user = await UserModel.findOne({email});
        return user;
    }
    catch (err){
        console.log(err)
    }
}

export async function findAllUser() {
    try{
        const user = await UserModel.find();
        return user;
    }
    catch(err){
        console.log(err)
    }
}