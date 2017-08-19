// express and load
var express = require("express");
var app = express();
// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose
var mongoose = require("mongoose");
// connection
mongoose.connect("mongodb://localhost/04_D_07_Assignment_01_Login_Registration");
// User schema
var UserSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Please Enter a First Name"], minlength: [ 2, "Please Enter a First Name Of 2 or More Characters." ],
  maxlength: [ 50, "Please Enter a First Name Under 50 Characters." ] },
  lastName: { type: String, required: [true, "Please Enter a Last Name"], minlength: [ 2, "Please Enter a Last Name Of 2 or More Characters." ],
  maxlength: [ 50, "Please Enter a Last Name Under 50 Characters." ] },
  userName: { type: String, required: [true, "Please Enter a User Name"], minlength: [ 4, "Please Enter a User Name Of 4 or More Characters." ],
  maxlength: [ 50, "Please Enter a User Name Under 50 Characters." ] },
  email: { type: String, required: [true, "Please Enter an Email"] },
  password: { type: String, required: [true, "Please Enter a Password"], minlength: [ 8, "Please Enter a Password Of 8 or More Characters." ],
  maxlength: [ 32, "Please Enter a Password Under 32 Characters." ] },
  passwordConfirmation: { type: String, required: [true, "Please Enter Password Confirmation"], minlength: [ 8, "Please Enter a Password Confirmation Of 8 or More Characters." ],
  maxlength: [ 32, "Please Enter a Password Confirmation Under 32 Characters." ] },
  birthday: { type: Date, required: [true, "Please Enter a Valid Date"]}
}, { timestamps: true });

mongoose.model("User", UserSchema);
var user = mongoose.model("User");
// path
var path = require("path");
// chalk
var chalk = require("chalk");
// moment
var moment = require("moment");
// static
app.use(express.static(path.join(__dirname, "./client/static")));
// views
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");
// ROUTES
// index route

app.get("/", function(req, res){
  res.render("index");
});

// post route - login
app.post("/login", function(req, res){
  console.log("PASS LOGIN");
  console.log(req.body);
  res.redirect("/dashboard");
});

// post route - registration
app.post("/registration", function(req, res){
  console.log('PASS REGISTRATION');
  console.log(req.body);
  res.redirect("/dashboard");
});

// get route - dashboard
app.get("/dashboard", function(req, res){
  res.render("dashboard");
});

// port call
let portNumber = 8000;
app.listen(portNumber, function(req, res){
  console.log(chalk.white.bgGreen(` Listening on Port ${portNumber} `));
});
