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
  
  userName: { type: String, unique: [true, "Username Already in Use, Please enter A Different Username"], required: [true, "Please Enter a Username"], minlength: [ 4, "Please Enter a User Name Of 4 or More Characters." ],
  maxlength: [ 50, "Please Enter a User Name Under 50 Characters." ],
  validate: { validator: function(email){
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return !(emailRegex.test(email));
      },
      message: "Username Can not be an Email Address"
    } 
  },
  
  email: { type: String, unique: [true, "Email Address Already in Use, Please enter A Different Email"], required: [true, "Please Enter an Email"], validate: { validator: function(email){
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
// session
var session = require("express-session");
app.use(session({ secret: "thisIsASecret "}));
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

// post route - registration
app.post("/registration", function(req, res){
  console.log('PASS REGISTRATION');
  console.log(req.body);
  //save user minus passwordConfirm
  
  // if(!(bcrypt.compareSync(bcryptPassword, req.body.passwordConfirmation))){
  //   console.log('Evaluates to False');
  // };
  
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
      // console.log(err);
      if(err.code == 11000){
        // console.log(chalk.white.bgRed(" ERROR HERE "));
        var evalString = err.errmsg;
        if(evalString.includes(req.body.userName)){
          // console.log("ERROR WITH DUPLICATE USERNAME");
          var errorUsernameDuplicate = "Username Already Registered.  Please Enter Unique Username."
        };
        if(evalString.includes(req.body.email)){
          // console.log("ERROR WITH DUPLICATE EMAIL");
          var errorEmailDupliate = "Email Already Registered.  Please Enter Unique Email Address"
        };
        // render page with errors for unique username or email
        res.render("index", { title: "Errors On Registration", errors: addUser.errors, userInfo: userInfo, errorEmailDupliate: errorEmailDupliate, errorUsernameDuplicate: errorUsernameDuplicate})
      }
      else {
        // render page with standard errors
        res.render("index", { title: "Errors On Registration", errors: addUser.errors, userInfo: userInfo})
      }
    }
    else if(user){
      user.findOne().sort({createdAt: -1}).exec(function(err, mostRecentUser){
        console.log(chalk.white.bgBlue('FIND ONE'));
        console.log(mostRecentUser);
        if(err){
          console.log(err);
        }
        else {
          var bcryptPassword = bcrypt.hashSync(mostRecentUser.password, bcrypt.genSaltSync(8));
          mostRecentUser.password = bcryptPassword;
          // pull most recent user added, encrypt password and save
          user.update({_id: mostRecentUser._id}, mostRecentUser, function(err, bcryptPassForUpdate){
            if(err){ console.log(err); }
          });
          let currentUserId = mostRecentUser._id;
          req.session.currentUserId = currentUserId;
          console.log("ADD USER ROUTE, USER ADDED TO DB, USER ID IN SESSION");
          res.redirect("/dashboard");
        }
      });
    }
    // password good, no errors, bcrypt password and then save into session
    else {
    }
  });
});

// post route - login
app.post("/login", function(req, res){
  console.log("PASS LOGIN");
  console.log(req.body);
  // for the FE forms
  var userInfoLogin = req.body;
  // if both empty
  if(req.body.email == "" && req.body.password == ""){
    var errorBothInputEmpty = "Both Login Fields Are Blank.  Please Fix and Resumbit."
    res.render("index", { errorBothInputEmpty: errorBothInputEmpty });
  }
  else {
    // if one empty
    if(req.body.email == "" || req.body.password == ""){
      console.log("INPUT INVALID");
      if(req.body.email == ""){
        var errorOneInputEmpty = "Login Email is Empty - Please Resubmit"
      }
      if(req.body.password == ""){
        var errorOneInputEmpty = "Login Password is Empty - Please Resubmit"
      }
      console.log(userInfoLogin);
      res.render("index", { errorOneInputEmpty: errorOneInputEmpty, userInfoLogin: userInfoLogin});
    }
    else{
      //find one, if user exists then check password
      user.findOne({ email: req.body.email }, function(err, loginUser){
        if(err){ 
          console.log(err);
        }
        else if(loginUser == null){
          var errorNoUserFound = "Login Email Not Found";
          res.render("index", { errorNoUserFound: errorNoUserFound, userInfoLogin: userInfoLogin})
        }
        else {
          var bcryptPasswordLogin = req.body.password;
          var passwordGood = bcrypt.compareSync(bcryptPasswordLogin, loginUser.password);
          console.log(passwordGood);
          if(passwordGood == false){
            console.log(chalk.white.bgRed("User Password Is Invalid"));
            var errorInvalidLoginCreds = "Invalid Login Credentials.  Please Try Again.";
            res.render("index", { errorInvalidLoginCreds: errorInvalidLoginCreds, userInfoLogin: userInfoLogin });
          }
          else {
            console.log("Login User Is: ");
            console.log(loginUser);
            let currentUserId = loginUser._id;
            req.session.currentUserId = currentUserId;
            // req.password.
            console.log(currentUserId);
            // console.log("Email Exists");
            res.redirect("/dashboard");
          }
        };
      });
    }
  }
});

// get route - dashboard
app.get("/dashboard", function(req, res){
  //if there isn't a session with currentUserId, redirect to index
  if(!req.session.currentUserId){
    console.log("NO SESSION");
    res.redirect("/");
  }
  else{
    user.find({}, function(err, allUsers){
      if(err){
        console.log(err);
      } else {
        // console.log(allUsers);
        let currentUserId = req.session.currentUserId;
        user.findOne({ _id: currentUserId }, function(err, currentUserObj){
          if(err){ console.log(err); }
          else{
            // add currentUserObj
            console.log(currentUserObj);
            res.render("dashboard", { allUsers: allUsers, currentUserObj: currentUserObj });
          }
        });
      }
    });
  }
});

app.get("/delete/:id", function(req, res){
  if(!req.session.currentUserId){
    console.log("NO SESSION");
    res.redirect("/");
  }
  else {
    user.remove({ _id: req.params.id }, function(err, userToDelete){
      if(err){ console.log(err);}
      else{
        res.redirect("/dashboard");
      }
    });
  }
});

app.get("/logout", function(req, res){
  req.session.destroy();
  res.redirect("/");
});

// port call
let portNumber = 8000;
app.listen(portNumber, function(req, res){
  console.log(chalk.white.bgGreen(` Listening on Port ${portNumber} `));
});
