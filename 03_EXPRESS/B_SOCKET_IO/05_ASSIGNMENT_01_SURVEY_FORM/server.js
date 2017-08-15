// express require
var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require("body-parser");

// use BP
app.use(bodyParser.urlencoded({ extended: true }));
// define static folder
app.use(express.static(path.join(__dirname, "./static")));
// setup ejs template and define the view folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route
app.get("/", function(req, res) {

    console.log("At Index Get Route");
    res.render("index");
});
// start node server/configured for socket.io
var server = app.listen(8000, function() {
    console.log("Listening on Port 8000");
});
var io = require("socket.io").listen(server);
// socket on
io.sockets.on("connection", function(socket) {
    console.log("Client/Socket is Connected");
    console.log("Client/Socket id is: ", socket.id);

    socket.on("posting_form", function(data) {
        console.log(data);
        // console.log(data.location);
        let numValMin = 1;
        let numValMax = 1000;
        var randomNumber = Math.floor(Math.random() * (numValMax - numValMin + 1) + numValMin);
        console.log(randomNumber);
        socket.emit("updated_message", { response: data });
        socket.emit("random_number", { randomNumber: randomNumber });
    });
});