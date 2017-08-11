// get the http module
var http = require('http');
// fs module allows us to read and write content for responses!
var fs = require('fs');
// creating a server using http module
var server = http.createServer(function(request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this how we do routhing:
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function(errors, contents) {
            // send data about response
            response.writeHead(200, { 'Content-Type': 'text/html' });
            // send response body
            response.write(contents);
            // finished!
            response.end();
        });
    } else if (request.url === '/dojo.html') {
        fs.readFile('dojo.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/style.css') {
        fs.readFile('style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(contents);
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File Not Found!!!');
    }
});
// which port
server.listen(6789);
// print to terminal window
console.log('Running in localhost at port 6789');