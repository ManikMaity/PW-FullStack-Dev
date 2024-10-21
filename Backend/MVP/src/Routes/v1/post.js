import express from "express";
import { deletePostController, getAllPostController, postController, postUpdateController } from "../../controllers/post.controller.js";
import { validate } from "../../validators/zodValidator.js";
import { zodPostValidation } from "../../validators/zodPostValidation.js";

const postRouter = express.Router();

postRouter.post("/create", validate(zodPostValidation), postController)
postRouter.get("/all", getAllPostController)
postRouter.delete("/delete", deletePostController)
postRouter.put("/update", postUpdateController)

export default postRouter