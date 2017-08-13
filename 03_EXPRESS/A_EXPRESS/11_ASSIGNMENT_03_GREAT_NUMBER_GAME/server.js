// express
var express = require("express");
// path
var path = require("path");
// express-session
var session = require("express-session");
// create express app
var app = express();
var bodyParser = require("body-parser");

// use BP
app.use(bodyParser.urlencoded({ extended: true }));
// static
app.use(express.static(path.join(__dirname, "./static")));
// session 
app.use(session({ secret: "thisIsASecret " }));
// setup ejs and views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root
app.get("/", function(req, res) {
    let numValMin = 1;
    let numValMax = 10;
    let genRandNum = Math.floor(Math.random() * (numValMax - numValMin + 1) + numValMin);
    console.log(genRandNum);
    req.session.numValMin = numValMin;
    req.session.numValMax = numValMax;
    req.session.genRandNum = genRandNum;
    res.render("index", { numValMin: numValMin, numValMax: numValMax });
});
// get - guess
app.get("/guess", function(req, res) {
    var numValMin = req.session.numValMin;
    var numValMax = req.session.numValMax;
    var genRandNum = req.session.genRandNum;
    var numGuessed = req.session.getNumGuessed;
    console.log(req.body);
    res.render("guess", { numValMin: numValMin, numValMax: numValMax, genRandNum: genRandNum, numGuessed: numGuessed });
});
// post - guess
app.post("/guess", function(req, res) {
    console.log(`-------- Next Line: POST GUESS BODY: req.body --------`);
    console.log(req.body);
    console.log(`POST GUESS BODY: numValGuess: ${req.body.numValGuess}`);
    req.session.getNumGuessed = req.body.numValGuess;
    console.log('FAIL');
    res.redirect("/guess");
});
// port setup
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});