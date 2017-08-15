// express
var express = require("express");
// make app
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// require path
var path = require("path");
// require mongoose
var mongoose = require("mongoose");
// static
app.use(express.static(path.join(__dirname, "./static")));
// views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// routes
// root
app.get("/", function(req, res) {
    // find all users
    User.find({}, function(err, users) {});
    // find users based on a requirement
    User.find({ name: "Steven" }, function(err, user) {});
    // find one user
    User.find({}, function(err, user) {});
    res.render("index");
});

// mongoose
mongoose.connect("mongodb://localhost/basic_mongoose")
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { timestamps: true })

mongoose.model("User", UserSchema);
var User = mongoose.model("User");

// add user request
app.post("/users", function(req, res) {
    console.log("POST DATA", req.body);
    // here add user to database in the future
    var user = new User({ name: req.body.name, age: req.body.age });
    // save
    user.save(function(err) {
        //if error clog
        if (err) {
            console.log("Something Went Wrong");
        } else {
            console.log("Successfully Added a User!");
            res.redirect("/");
        }
    });
});



// setup server listener
let portNumber = 8000;
app.listen(portNumber, function() {
    console.log(`Listening on Port ${portNumber}`);
});