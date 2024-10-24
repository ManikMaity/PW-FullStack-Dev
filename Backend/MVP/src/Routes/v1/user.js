import express from "express";
import UserModel from "../../Model/user.model.js";
import { postController } from "../../controllers/post.controller.js";
import { getProfileController } from "../../controllers/user.controller.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({ msg: "User Page" });
});

userRouter.get("/profile", getProfileController);


export default userRouter;