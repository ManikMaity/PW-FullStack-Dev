import express from "express";
import userRouter from "./user.js";
import postRouter from "./post.js";
import { signupController } from "../../controllers/auth.controller.js";
import { validate } from "../../validators/zodValidator.js";
import { zodSignupValidation } from "../../validators/zodSignupValidator.js";
const v1Router = express.Router();



v1Router.use("/user", userRouter);
v1Router.use("/post", postRouter);
v1Router.post("/signup", validate(zodSignupValidation), signupController)


export default v1Router;