console.log("Create a Server");

let http2 = require("http");
http2.createServer(function(req, res){
res.write("This is My First Server");
res.end(()=>{console.log("Server hit")});
}).listen(150)