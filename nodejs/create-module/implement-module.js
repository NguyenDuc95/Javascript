var http = require('http');
var data = require('./module');
// create a server object 
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write('some thing here');// write a response to the client
    // res.write(`this today is ${data.myDateTime()}`);
    res.write(req.url);
    res.end();
}).listen(8080);