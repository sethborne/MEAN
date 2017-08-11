// http module
var http = require('http');
// fs module allows us to read/write
var fs = require('fs');
// creating server
var server = http.createServer(function(request, response) {
    // what URL the clients are requesting:
    console.log('client request URL', request.url);
    // this is how we do routing
    if (request.url === "/") {
        fs.readFile('index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/ninjas") {
        fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/dojos/new") {
        fs.readFile('dojos.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/style.css") {
        fs.readFile('style.css', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("File Not Found!!!");
    }
});

server.listen(6789);

console.log('Running in LocalHost at Port: 6789');