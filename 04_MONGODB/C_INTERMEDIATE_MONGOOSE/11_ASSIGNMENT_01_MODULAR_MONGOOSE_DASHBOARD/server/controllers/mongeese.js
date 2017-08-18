var moment = require("moment");
var mongoose = require("mongoose");
var Mongeese = mongoose.model("Mongeese");

module.exports = {
  showAll: function(req, res){
    Mongeese.find({}, function(err, mongeese){
      if(err){
        console.log(err);
      }
      else {
        // console.log("MONGEESE CHECK");
        // console.log(mongeese);
      }
      console.log('Hit Show All | Controller');
      res.render("index", { allMongeese: mongeese, moment: moment});
    });
  },
  showOne: function(req, res){
    Mongeese.findOne({ _id: req.params.id }, function(err, dataForShow){
      if(err){ console.log(err) };
      console.log('Hit Show One | Controller');
      res.render("showMongoose", { mongooseToShow: dataForShow, moment: moment });
    });
  },
  create: function(req, res){
    var addMongoose = new Mongeese(req.body);
    addMongoose.save(function(err){
        if(err){
          console.log("THIS IS ERROR LOGS " + err);
          res.render("addMongoose", { title: "Errors", errors: addMongoose.errors });
        } else {
          console.log("[THIS] Post Error Check Else");
          res.redirect("/");
        }
    });
  },
  destroy: function(req, res){
    Mongeese.remove({ _id: req.params.id }, function(err, result){
        if(err){
          console.log(err);
        }
        res.redirect("/");
    });
  },
  editOne: function(req, res){
    Mongeese.findOne({ _id: req.params.id }, function(err, dataForEdit){
        if(err){ console.log(err); };
        console.log("Hit Edit One | Controller");
        res.render("editMongoose", { mongooseToEdit: dataForEdit });
    });
  },
  update: function(req, res){
    Mongeese.update({ _id: req.params.id }, req.body, function(err, dataForUpdate){
      // if errors - push them to the edit page
      if(err){
        console.log("THIS IS ERROR LOGS - UPDATE " + err);
        res.render("editMongoose", { title: "Errors", errors: Mongeese.errors });
      }
      else {
        console.log("Mongoose Update ELSE - NO ERRORS | Controller");
        res.redirect("/");
      }
  });
  }
}
