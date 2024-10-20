import express from "express";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./Routes/apiRouter.js";


const app = express();
const PORT = 3000;
app.use(express.json());

await connectDB();

app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log("Server started on port http://localhost:3000");
});