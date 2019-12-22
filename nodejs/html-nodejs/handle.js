var http = require("http");
var fs = require("fs"); // read file on server
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    let data = fs.readFileSync(__dirname+ "/index.html","utf-8");
    res.end(data);
}).listen(7777);