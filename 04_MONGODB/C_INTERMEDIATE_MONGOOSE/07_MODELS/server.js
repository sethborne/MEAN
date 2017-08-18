// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// chalk
var chalk = require("chalk");
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// bring in mongoose config
require("./server/config/mongoose.js")

// bring in your routes
var routeSetter = require("./server/config/routes.js");
routeSetter(app);

// tell the express app to listen on port 8000
let portNumber = 8000;
app.listen(portNumber, function () {
  console.log(chalk.white.bgGreen(` Listening on Port ${portNumber} `));
})
