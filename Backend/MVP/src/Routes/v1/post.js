import express from "express";
import { deletePostController, getAllPostController, postController, postUpdateController } from "../../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/create", postController)
postRouter.get("/all", getAllPostController)
postRouter.delete("/delete", deletePostController)
postRouter.put("/update", postUpdateController)

export default postRouter