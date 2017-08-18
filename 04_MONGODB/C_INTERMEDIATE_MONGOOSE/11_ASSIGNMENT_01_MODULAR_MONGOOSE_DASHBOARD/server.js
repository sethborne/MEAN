// express
var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose
// var mongoose = require("mongoose");


// path
var path = require("path");
// moment
var moment = require("moment");
// chalk
var chalk = require("chalk");
// static
app.use(express.static(path.join(__dirname, "./client/static")));
// views
app.set("views", path.join(__dirname, "./client/views"));
// ejs
app.set("view engine", "ejs");
// Mongoose Config
require("./server/config/mongoose.js")
// ROUTES
// call routes file
var routeSetter = require("./server/config/routes.js");
// envoke app
routeSetter(app);

let portNumber = 8000;
app.listen(portNumber, function(req, res){
    console.log(chalk.white.bgGreen(` Listening on Port ${portNumber} `));
});

