var express = require("express");
var path = require("path");

var app = express();
// define static folder
app.use(express.static(path.join(__dirname, "./static")));
// setup ejs templating and define the views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route
app.get("/", function(req, res) {
    res.render("index");
});
// start node server/configured for socket.io
var server = app.listen(8000, function() {
    console.log("Listening on Port 8000");
});
var io = require("socket.io").listen(server);
// sockets on lines!
io.sockets.on("connection", function(socket) {
    console.log("Client/Socket is Connected");
    console.log("Client/Socket id is: ", socket.id);

    socket.on("button_clicked", function(data) {
        console.log("Someone Clicked a Button! Reason: " + data.reason);
        // emitted event
        socket.emit("server_response", { response: "sockets are the best!" });
    });
});