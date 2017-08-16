// express
var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/04_B_06_Assignment_01_QuotingDojo");
// mongoose.connect("mongodb://localhost/temp");

var QuoteSchema = new mongoose.Schema({
    name: { type: String },
    quote: { type: String }
}, { timestamps: true });

// mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("quotes", QuoteSchema);
// mongoose.Promise = global.Promise;

// path
var path = require("path");
// moment
var moment = require("moment");
// static
app.use(express.static(path.join(__dirname, "./static")));
// views
app.set("views", path.join(__dirname, "./views"));
// ejs view engine
app.set("view engine", "ejs");
// ROUTES
// root 
app.get("/", function(req, res) {
    
    res.render("index");
});

app.get("/quotes", function(req, res) {
    console.log("GET: at Quotes");
    // this needs a get all users 
    Quote.find({}, function(err, results){
        if(err){
            console.log(err);
        }
        res.render("quotes", { quotes: results, moment: moment });
    });
});

app.post("/quotes", function(req, res) {
    console.log("POST DATA", req.body);
    Quote.create(req.body, function(err) {
        if (err) {
            console.log(err);
            res.render("index", { errors: quote.errors });
        } else {
            console.log('Quote Post Error Check Else.');
            res.redirect("/");
        }
    });
    // res.redirect("/");
});



let portNumber = 8000;
app.listen(portNumber, function() {
    console.log(`Listening on Port ${portNumber}`);
});