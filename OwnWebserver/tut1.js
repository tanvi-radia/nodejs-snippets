// Creating our own web server(req,res) server using node.js
// http.createServer(): includes req and res i.e., request and response parameters supplied by Node.js
// request object: can be used to get information about current HTTP request.
// Eg: request url, request header, request data

// If the response from the HTTP server is supposed to be displayed as HTML.
// You should include an HTTP header with correct content type
// http.createServer (req, res): will create a request, response server
// res.end("Output to be displayed on the browser")

const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello from other side");
});

server.listen(7001, () => {
    console.log("listening to port no 7001");
});

// Note: Start your apache and mysql and then run .js file in terminal either by nodemon or node tut1.js and then stop both of them and see the output on the server