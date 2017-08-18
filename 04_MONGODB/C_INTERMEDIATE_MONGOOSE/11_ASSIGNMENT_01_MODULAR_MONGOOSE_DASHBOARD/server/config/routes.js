var moment = require("moment");
// turn off when finished
var mongoose = require("mongoose");
var Mongeese = mongoose.model("Mongeese");
// new require
var mongeese = require("../controllers/mongeese.js");

module.exports = function(app) {
  app.get("/", function(req, res){
    mongeese.showAll(req, res);
  });

  app.get("/mongooses/show/:id", function(req, res){
    mongeese.showOne(req, res);
  });

  app.get("/mongooses/add", function(req, res){
    console.log("GET: at Add");
    res.render("addMongoose");
  });

  app.post("/mongooses/add", function(req, res){
    console.log("POST: from Add");
    // console.log(req.body);
    mongeese.create(req, res);
  });

  app.get("/mongooses/edit/:id", function(req, res){
    mongeese.editOne(req, res);
  });

  app.post("/mongooses/edit/:id", function(req, res){
    mongeese.update(req, res);
  });

  app.post("/mongooses/destroy/:id", function(req, res){
    mongeese.destroy(req, res);
  });
}
