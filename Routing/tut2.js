// Routing in Node.js
const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end("Hello from other side Tanvi" );
   if (req.url=="/") {
      res.end("Hello from home side");
   } 
   else if (req.url=="/about") {
    res.end("Hello from about side");
   }
   else if (req.url=="/contact") {
    res.end("Hello from contact side");
   }
   else {
    res.writeHead(404, {"Content-type": "text/html"});
    res.end("<h1>404 error page</h1>");
   }
});

server.listen(7003, () => {
    console.log("listening to port no 7003");
});
