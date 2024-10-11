import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const connectionString = process.env.MONGODB_CONNECTION_STRING;

export const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("connected to database");
    }
    catch(err){
        console.log(err);
    }
}
connectDB();

const userShema = new Schema({
    _id : ObjectId,
    email : String,
    password : String
})


const UserModel = mongoose.model("users", userShema);
export {UserModel};