import express from "express";
import userRouter from "./user.js";
import postRouter from "./post.js";
import v1Router from "./v1/v1Router.js";
const apiRouter = express.Router();

apiRouter.use("/v1", v1Router);


export default apiRouter;