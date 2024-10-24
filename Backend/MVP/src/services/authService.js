import { createUser } from "../repositories/userRepository.js";


export async function signupService(username, email, password) {
    try{
        const response = await createUser(username, email, password);
        return response;
    }
    catch(err){
        if (err.code === 11000) {
            throw {
                status : 409,
                message : "User already exists",
                success : false
            };
        }
        throw err;
    }
}