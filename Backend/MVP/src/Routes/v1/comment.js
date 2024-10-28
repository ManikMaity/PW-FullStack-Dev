import express from "express";
import { check, createCommentController } from "../../controllers/comment.controller.js";
import { isAuthenticated } from "../../middleware/isAuthenticated.js";
import { validate } from "../../validators/zodValidator.js";
import zodCommentValidation from "../../validators/zodCommentValidator.js";
const commentRouter = express.Router();

/**
 * @swagger
 * /comment:
 *  get:
 *     summary: check comment router is working
 *     description: check comment router is working
 *     responses:
 *          200:
 *              description: Comment router is working
 */
commentRouter.get("/", check)

/**
 * @swagger
 * /comment/create:
 *  post:
 *     summary: Create comment
 *     description: Create a new comment
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      content:
 *                          type: string
 *                          required: true
 *                          description: Comment content
 *                      postId:
 *                          type: string
 *                          required: true
 *                          description: Post id
 *              
 *     responses:
 *          200:
 *              description: Comment created successfully
 *          500:
 *              description: Internal server error
 *          400:
 *              description: Validation error
 *          401:
 *              description: Unauthorized
 */
commentRouter.post("/create", validate(zodCommentValidation), isAuthenticated, createCommentController)


export default commentRouter;