var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// mongoose
var mongoose = require("mongoose");
// db connection
mongoose.connect("mongodb://localhost/04_C_14_Assignment_03_RESTFUL_TASK_API")
// schema
var TaskSchema = new mongoose.Schema({
  // id
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
}, { timestamps: true });

var Task = mongoose.model("Task", TaskSchema)
var task = mongoose.model("Task");

// path
var path = require("path");
// chalk
var chalk = require("chalk");
// static
app.use(express.static(path.join(__dirname, "./client/static")));
// ejs/views
app.set("views", path.join(__dirname, "./client/views"));
app.set("view engine", "ejs");
// Routes
// GET Index
app.get("/", function(req, res){
  res.render("index");
});

// GET All
app.get("/tasks", function(req, res){
  res.render("showAllTasks");
});

// GET One
app.get("/tasks/:id", function(req, res){
  
});

// GET Add
app.get("/tasks/add", function(req, res){
  console.log("At Tasks Add");
  res.render("addTask");
});

// POST Add
// app.post("/tasks/add", function(req, res){
  
// });

// PUT Update One
app.put("/tasks", function(req, res){
  
});

// DELETE One
app.delete("/tasks/:id", function(req, res){
  
});

let portNumber = 8000;
app.listen(portNumber, function(req, res){
  console.log(chalk.white.bgBlue(` Listening on Port ${portNumber} `));
});
