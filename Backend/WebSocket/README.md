# WebSocket (Piyush Garg)

- In normal connection the client req to the server and server give response after that the connection ends.
- The problem in this case, sapose we are building a chat application and `user1` send a message to `user2`. `user1 -> Server -> user2` but `user2` will not receive unless he continously check the server for new messages by using something like `setInterval()`. this is called `polling`.
- This is not efficient because it pull pressure on the server. so, intead of `polling` we can use `Websocket`.
- In `Websocket` the client req to the server and server give response in real time.
- In websocket connection, the client and server are connected in real time until the connection ends by client.
- To make a websocket connection client send a req to the server telling to make WS connection on headers.

## Websocket in Node.js

- In nodejs we have `socket.io` which is a library for websocket in nodejs.
- `npm install socket.io`
- setup the express server and run it.

```js
import express from "express";
import { PORT } from "./config/variables.js";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
```

- add `socket.io` in the index.js file.

```js
import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {});
```
