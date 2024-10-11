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
