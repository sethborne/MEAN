var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
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
// moment
var moment = require("moment");
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
  Task.find({}, function(err, allTasks){
    if(err){
      console.log(chalk.white.bgRed(" ERROR ON FIND ALL AT INDEX AFTER: "));
      console.log(err);
    }
    else {
      console.log(chalk.white.bgMagenta(" FOUND ALL THE TASKS AT INDEX "));
      console.log(allTasks);
      // res.render("showAllTasks", { allTasks: allTasks, moment: moment });
      res.json(allTasks)
    };
  });
});

// GET One
app.get("/tasks/show/:id", function(req, res){
  Task.findOne({ _id: req.params.id }, function(err, oneTask){
    if(err){
      console.log(chalk.white.bgRed(" ERROR ON FIND ONE AT FIND ONE ROUTE, AFTER: "));
      console.log(err);
    }
    else{
      console.log(chalk.white.bgMagenta(" FOUND ONE AT SHOW ONE "));
      console.log(oneTask);
      // res.render("showOneTask", { oneTask: oneTask, moment: moment });
      res.json(oneTask)
    }
  });
});

// GET Add
// app.get("/task/add", function(req, res){
  // console.log("At Tasks Add");
  // res.render("addTask");
// });

// POST Add
// app.get("/tasks/add/:title/:description", function(req, res){
app.get("/tasks/add", function(req, res, next){
  // http://localhost:8000/tasks/add?title=TITLEHERE&description=DESCRIPTIONHERE
  console.log(chalk.white.bgCyan(" REQ BODY AT TASK ADD "));
  var title = req.query.title;
  var description = req.query.description;
  // req.body = { title: req.params.title, description: req.params.description }
  req.body = { title: title, description: description }
  console.log(req.body);
  var addTask = new Task(req.body);
  addTask.save(function(err){
    if(err){
      console.log(chalk.white.bgRed(" ERROR ON SAVE LOGGED BELOW AFTER: "));
      console.log(err);
      res.render("addTask", { title: "Errors", errors: addTask.errors })
    }
    else {
      console.log(chalk.white.bgMagenta(" SHOULD SAVE "));
      res.redirect("/tasks");
      // res.json(allTasks);
    }
  })
});

// PUT Update One
app.get("/tasks/edit/:id", function(req, res, next){
  var titleUpdate = req.query.title;
  var descriptionUpdate = req.query.description;
  req.body = { title: titleUpdate, description: descriptionUpdate };
  Task.update({ _id: req.params.id }, req.body, function(err){
    if(err){
      console.log(chalk.white.bgRed(" ERROR ON SAVE EDIT "));
      console.log(err);
    }
    else {
      console.log(chalk.white.bgMagenta(" SHOULD EDIT "));
      res.redirect("/tasks");
    }
  });
});

// DELETE One
app.get("/tasks/delete/:id", function(req, res){
  Task.remove({ _id: req.params.id }, function(err, taskToDelete){
    if(err){
      console.log(chalk.white.bgRed(" ERROR AT DELETE TASK "));
      console.log(err);
    }
    else {
    }
    res.redirect("/tasks");
  });
});

let portNumber = 8000;
app.listen(portNumber, function(req, res){
  console.log(chalk.white.bgBlue(` Listening on Port ${portNumber} `));
});
