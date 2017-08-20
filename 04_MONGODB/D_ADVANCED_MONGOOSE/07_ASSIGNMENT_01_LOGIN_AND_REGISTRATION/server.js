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
  userName: { type: String, required: [true, "Please Enter a Username"], minlength: [ 4, "Please Enter a User Name Of 4 or More Characters." ],
  maxlength: [ 50, "Please Enter a User Name Under 50 Characters." ] },
  email: { type: String, required: [true, "Please Enter an Email"], validate: { validator: function(email){
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(email);
      },
      message: "Email is not a Valid Format, Please Try Again"
    } 
  },
  password: { type: String, required: [true, "Please Enter a Password"], minlength: [ 8, "Please Enter a Password Of 8 or More Characters." ]}
  
}, { timestamps: true });


// birthday: { type: Date, required: [true, "Please Enter a Valid Date"]}
// passwordConfirmation: { type: String, required: [true, "Please Enter Password Confirmation"], minlength: [ 8, "Please Enter a Password Confirmation Of 8 or More Characters." ],
// maxlength: [ 32, "Please Enter a Password Confirmation Under 32 Characters." ] },

var User = mongoose.model("User", UserSchema);
var user = mongoose.model("User");

// path
var path = require("path");
// chalk
var chalk = require("chalk");
// moment
var moment = require("moment");
// bcrypt
var bcrypt = require("bcrypt");
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
  //find one, if user exists then check password
  res.redirect("/dashboard");
});

// post route - registration
app.post("/registration", function(req, res){
  console.log('PASS REGISTRATION');
  console.log(req.body);
  //save user minus passwordConfirm
  var addUser = new User({
    firstName: req.body.firstName, 
    lastName: req.body.lastName, 
    userName: req.body.userName, 
    email: req.body.email, 
    password: req.body.password});
    
  addUser.save(function(err){
    // var for object that goes to FE if errors
    var userInfo = req.body;
    // check that password matches
    if(req.body.password != req.body.passwordConfirmation){
      // Custom Error for Passwords Not Matching
      var passwordNotMatch = "Passwords do not Match."
      res.render("index", { errors: addUser.errors, passwordError: passwordNotMatch, userInfo: userInfo });
    }
    // check that there are no errors based on validations
    else if(err){
      console.log("ADD USER IF = ERRORS: " + err);
      var passwordNotMatch;
      res.render("index", { title: "Errors On Registration", errors: addUser.errors, userInfo: userInfo})
    }
    // password good, no errors, bcrypt password and then save into session
    else{
      // if no errors, bcrypt the password
      // if(req.body.password){
        var bcryptPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8));
      // }
      console.log(bcryptPassword);
      req.body.password = bcryptPassword;
      console.log(req.body);
      console.log("ADD USER - POST NO ERRORS, ADDED");
      res.redirect("/dashboard");
    }
  });
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
