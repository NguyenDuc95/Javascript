const http = require('http');
// req: request user, res: response of server

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
}).listen(3000);

// localhost:3000
