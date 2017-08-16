// express
var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/04_B_07_Assignment_02_Mongoose_Dashboard");

//Schema?
var MongeeseSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Mongoose Name is Required"], minlength: [ 3, "Mongoose Name Needs at Least 3 Characters"] },
    age: { type: Number, required: [true, "Mongoose Age is Required"] },
    color: { type: String, required: [true, "Mongoose Color is Required"] },
    location: { type: String, required: [true, "Mongoose Location is Required"] }
    
}, { timestamps: true });

var Mongeese = mongoose.model("mongeese", MongeeseSchema);

// path
var path = require("path");
// moment
var moment = require("moment");
// static
app.use(express.static(path.join(__dirname, "./static")));
// views
app.set("views", path.join(__dirname, "./views"));
// ejs
app.set("view engine", "ejs");
// ROUTES
// root
app.get("/", function(req, res){
    Mongeese.find({}, function(err, mongeese){
        if(err){
            console.log(err);
        }
        else {
            // console.log("MONGEESE CHECK");
            // console.log(mongeese);
        }
        res.render("index", { allMongeese: mongeese, moment: moment});
    });
});

app.get("/mongooses/show/:id", function(req, res){
    Mongeese.findOne({ _id: req.params.id }, function(err, dataForShow){
        if(err){ console.log(err) };
        res.render("showMongoose", { mongooseToShow: dataForShow, moment: moment });
    });
});

app.get("/mongooses/add", function(req, res){
    console.log("GET: at Add");
    res.render("addMongoose");
});

app.post("/mongooses/add", function(req, res){
    console.log("POST: from Add");
    console.log(req.body);
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
});

app.get("/mongooses/edit/:id", function(req, res){
    Mongeese.findOne({ _id: req.params.id }, function(err, dataForEdit){
        if(err){ console.log(err); };
        res.render("editMongoose", { mongooseToEdit: dataForEdit });
    });
});

app.post("/mongooses/edit/:id", function(req, res){
    Mongeese.update({ _id: req.params.id }, req.body, function(err, dataForUpdate){
        // if errors - push them to the edit page
        if(err){
            console.log("THIS IS ERROR LOGS - UPDATE " + err);
            res.render("editMongoose", { title: "Errors", errors: Mongeese.errors });
        }
        else {
            console.log("Mongoose Update ELSE - NO ERRORS ");
            res.redirect("/");
        }
    });
});

app.post("/mongooses/destroy/:id", function(req, res){
    Mongeese.remove({ _id: req.params.id }, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect("/");
    });
});

let portNumber = 8000;
app.listen(portNumber, function(req, res){
    console.log(`Listening on Port ${portNumber}`);
});

