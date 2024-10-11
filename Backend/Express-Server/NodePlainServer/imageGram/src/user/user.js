import express from "express";
import { UserModel } from "../../db/db-mongo.js";
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({ msg: "User Page" });
});

userRouter.get("/profile", async (req, res) => {
  try {
    const email = req.query.email;
    console.log(email);
    const user = await UserModel.findOne({ email });
    if (user) {
      res.json(user);
    } else {
      throw new Error("User Not Found");
    }
  } catch (err) {
    res.json({ msg: err.message });
  }
});

export default userRouter;
