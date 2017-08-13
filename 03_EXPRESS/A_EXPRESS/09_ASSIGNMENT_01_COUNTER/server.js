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
app.use(session({ secret: "thisIsASecret" }));
// setup ejs and views
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
// root
app.get("/", function(req, res) {
    var countVal = req.session.countVal;
    res.render("index", { countVal: countVal });
});
// post - countOne route
app.post("/countOne", function(req, res) {
    if (!req.session.countVal) {
        let countVal = 0;
        countVal += parseInt(req.body.numValIncOne);
        req.session.countVal = countVal;
        console.log('FIRST');
    } else if (req.session.countVal) {
        let countVal = parseInt(req.session.countVal);
        countVal += parseInt(req.body.numValIncOne);
        req.session.countVal = countVal;
        console.log('SECOND');
    } else {
        // countVal += req.body.numValIncOne;
        // req.session.countVal = req.body.numValIncOne;
    }
    console.log(`Count: ${req.session.countVal}`);
    // req.session.countVal = req.body.numValIncOne;
    res.redirect("/");
});
// post - countTwo route
app.post("/countTwo", function(req, res) {
    if (!req.session.countVal) {
        let countVal = 0;
        countVal += parseInt(req.body.numValIncTwo);
        req.session.countVal = countVal;
        console.log('FIRST');
    } else if (req.session.countVal) {
        let countVal = parseInt(req.session.countVal);
        countVal += parseInt(req.body.numValIncTwo);
        req.session.countVal = countVal;
        console.log('SECOND');
    } else {
        // countVal += req.body.numValIncOne;
        // req.session.countVal = req.body.numValIncOne;
    }
    console.log(`Count: ${req.session.countVal}`);
    // req.session.countVal = req.body.numValIncOne;
    res.redirect("/");
});
// reset session
app.post("/reset", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});
// port setup
app.listen(8000, function() {
    console.log("Listening on Port 8000");
});