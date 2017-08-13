// express
var express = require("express");
// path
var path = require("path");
// express-session
var session = require("express-session");
// create express app
var app = express();
var bodyParser = require("body-parser");

// use BP
app.use(bodyParser.urlencoded({ extended: true }));
// static
app.use(express.static(path.join(__dirname, "./static")));
// session
app.use(session({ secret: "thisIsASecret" }));
// setup ejs and views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root
app.get("/", function(req, res) {
    res.render("index");
});
// get
app.get("/results", function(req, res) {
    var info = req.session.info;

    res.render("results", { info: info });
});
// post
app.post("/results", function(req, res) {
    console.log(req.body);
    req.session.info = req.body;
    res.redirect("/results");
});
// port setup
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});