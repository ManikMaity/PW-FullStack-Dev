import express from "express";
import { check, createCommentController, getCommentsController, updateCommentController } from "../../controllers/comment.controller.js";
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
commentRouter.post("/create", validate(zodCommentValidation), isAuthenticated, createCommentController);

// getting comments for post
/**
 * @swagger
 * /comment/{postId}:
 *  get:
 *     summary: get comments for post
 *     description: get comments for post
 *     parameters:
 *      - in: path
 *        name: postId
 *        type: string
 *        required: true
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *     responses:
 *          200:
 *              description: Comment fetched successfully
 *          500:
 *              description: Internal server error
 *          400:
 *              description: Validation error
 *          401:
 *              description: Unauthorized
 */
commentRouter.get("/:postId", isAuthenticated, getCommentsController)

// update a comment
commentRouter.put("/:commentId", isAuthenticated, updateCommentController)


export default commentRouter;