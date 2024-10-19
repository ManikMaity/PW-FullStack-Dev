import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        validate : {
            validator : (value) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message : (props) => `${props.value} is not a valid email`
        }

    },
    password : {
        type : String,
        required : true
    }
}, {timestamps : true});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;