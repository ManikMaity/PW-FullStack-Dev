import express from "express";
import userRouter from "./Routes/user.js";
import adminRouter from "./Routes/admin.js";
import connectDB from "./config/dbConfig.js";


const app = express();
const PORT = 3000;
app.use(express.json());

await connectDB();

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
    console.log("Server started on port http://localhost:3000");
});