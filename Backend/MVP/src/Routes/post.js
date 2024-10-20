import express from "express";
import { getAllPostController, postController } from "../controllers/post.controller.js";

const postRouter = express.Router();

postRouter.get("/create", postController)
postRouter.get("/all", getAllPostController)

export default postRouter