const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-type','text/html');
	res.end('Hello World!');
});

server.listen(port,hostname, ()=> {
	console.log('listening on port : '+port);
});