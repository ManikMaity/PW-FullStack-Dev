import express from "express";
import userRouter from "./user/user.js";
import adminRouter from "./admin/admin.js";
import { connectDB } from "../db/db-mongo.js";

const app = express();
const PORT = 3000;
app.use(express.json());

connectDB();

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log("Server started on port http://localhost:3000");
});