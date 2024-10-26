import express from "express";
import { deletePostController, getAllPostController, postController, postUpdateController } from "../../controllers/post.controller.js";
import { validate } from "../../validators/zodValidator.js";
import { zodPostValidation } from "../../validators/zodPostValidation.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";

const postRouter = express.Router();

postRouter.post("/create", validate(zodPostValidation), isAuthenticated, postController)
postRouter.get("/all", getAllPostController)
postRouter.delete("/delete", isAuthenticated, deletePostController)
postRouter.put("/update", postUpdateController)

export default postRouter