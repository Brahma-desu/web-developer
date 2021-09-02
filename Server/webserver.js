//import http Modules

var http = require("http");
var httpStatus = require("http-status-codes");  //Create Server

var app = http.createServer(function(require,response){
    response.writeHead(httpStatus.ok,{
        "Content-Type":"text/html"
    });
    let responseMessage = "<h2>Welcome to Node js</h2>";
    response.write(responseMessage);
});

app.listen(3000);

console.log("Server Started: http://127.0.0.1:3000");
