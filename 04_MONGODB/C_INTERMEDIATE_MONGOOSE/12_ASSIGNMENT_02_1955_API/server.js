var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// mongoose
var mongoose = require("mongoose");
// db connection
mongoose.connect("mongodb://localhost/04_C_12_Assignment_02_1995_API")
// schema
var PersonSchema = new mongoose.Schema({
  name: { type: String, required: true }
}, { timestamps: true });

var Person = mongoose.model("Person", PersonSchema)
var person = mongoose.model("Person");

// path
var path = require("path");
// chalk
var chalk = require("chalk");
// Routes
// get index
app.get("/", function(req, res){
  // this just needs to be a findAll
  // var names = [{name: "Steve"}, {name: "Susan"}];
  person.find({}, function(err, allPeople){
    if(err){ console.log(err); }
    else {      
      console.log("At Index Controller");
      res.json(allPeople);
    }
  });
});

// get new/:name ? will this work?
app.get("/new/:name", function(req, res){
  req.body = { name: req.params.name}
  var person = new Person(req.body);
  person.save(function(err){
    if(err){
      console.log(err);
    }
    else {
      console.log(chalk.white.bgBlue('Following person Added to the Database'));
      console.log(req.body);
      res.redirect("/");
    }
  });

});

// get remove/:name
app.get("/remove/:name", function(req, res){
  let found = false;
  person.findOne({ name: req.params.name }, function(err, foundPerson){
    if(foundPerson == null){
      foundPerson = "Can not Remove.  No Person in Database with this Name.  Please try Again."
      res.json(foundPerson);
    }
    else {
      person.remove({ name: req.params.name }, function(err, remPerson){
        if(err){
          console.log(err);
        }
        else{
          console.log(remPerson);
          res.redirect("/");
        }
      });
    }
  });
});

// get show/:name
app.get("/:name", function(req, res){
  
  person.findOne({ name: req.params.name }, function(err, onePerson){
    if(onePerson == null){
      onePerson = "No One With This Name in Database.  Please try Again.";
      console.log(err);
      res.json(onePerson);
    }
    else {
      console.log("At Show One");
      res.json(onePerson);
    }
  });
});

let portNumber = 8000;
app.listen(portNumber, function(req, res){
  console.log(chalk.white.bgGreen(` Listening on Port ${portNumber} `));
});
