// http module
var http = require('http');
// fs module
var fs = require('fs');
// creating server
var server = http.createServer(function(request, response) {
    // what URL the clients are requesting
    console.log('client request URL', request.url);
    // routing
    if (request.url === "/") {
        fs.readFile('views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/css/style.css") {
        fs.readFile('./css/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/css' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars") {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/car1.jpg") {
        fs.readFile('./images/car1.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/car2.jpg") {
        fs.readFile('./images/car2.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/car3.jpg") {
        fs.readFile('./images/car3.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars/new") {
        fs.readFile('views/addCars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cats") {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat1.jpg") {
        fs.readFile('./images/cat1.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat2.jpg") {
        fs.readFile('./images/cat2.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat3.jpg") {
        fs.readFile('./images/cat3.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'image/jpg' });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end("File Not Found!!!");
    }
});

server.listen(7077);
console.log('Running in LocalHost at Port: 7077');