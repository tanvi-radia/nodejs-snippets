// creating our own server simplest code
const http = require("http");

http.createServer((req,res)=>{
res.end("This is Tanvi");
}).listen(8009);