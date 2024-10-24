# NodeJs Server
- Using nodejs we can create server
- Node JS framework like express js make it easy to create server.

## Node Plain Server
- Even without express js we can create server
```js
const http = require("http");

const port = 3000;
const server = http.createServer((req, res) => {
  console.log("Req received");

  if (req.url === "/ping") {
    res.write("pong");
  } else {
    res.write("Hello World");
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
```