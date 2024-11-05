import express from "express";
import { PORT } from "./config/variables.js";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("New client connected", socket.id);

    socket.on("new-user-joined", (msg) => {
        io.emit("new-user", socket.id);
    })

    socket.on("disconnect", () => {
        io.emit("user-left", socket.id);
    })

    socket.on("message", (message) => {
        io.emit("message", {message, id: socket.id});
    })
})

app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
});

server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

