import express from "express";
import { PORT } from "./config/variables.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg : "Server is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})