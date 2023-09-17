const http = require("http");
const fs = require("fs");

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
   else if (req.url=="/api") {
    // res.end("This is api page");
    fs.readFile("userApi.json","utf-8",(err,data)=>{
        res.end(data)
    });
   }
   else {
    res.writeHead(404, {"Content-type": "text/html"});
    res.end("<h1>404 error page</h1>");
   }
});

server.listen(7003, () => {
    console.log("listening to port no 7003");
});
