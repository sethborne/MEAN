// express
var express = require("express");
// path
var path = require("path");
// create express app
var app = express();
var bodyParser = require("body-parser");
// use BP
app.use(bodyParser.urlencoded({ extended: true }));
// static
app.use(express.static(path.join(__dirname, "./static")));
// setup ejs and views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root route
app.get("/", function(request, response) {
    response.render("index");
});
//post route
app.post("/users", function(request, response) {
    console.log("POST DATA: ", request.body);
});
// port call
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});