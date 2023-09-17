// Handle HTTP request and routing in node.js
// var http = require("http");
var url = require('url');
var adr = 'http://localhost:7001/about';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);

// server.listen(7001, () => {
//     // console.log(req.url);
//     console.log("listening to port no 7001");
// });

// var url = require('url');
// var adr = 'http://localhost:7001/about';
// var q = url.parse(adr, true);
// console.log(q.host);
// console.log(q.pathname);