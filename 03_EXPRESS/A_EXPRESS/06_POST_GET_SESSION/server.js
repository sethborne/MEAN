var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(request, response) {
    response.render("index", { title: "My Express Project" });
});

app.post("/users", function(request, response) {
    console.log("POST DATA \n\n", request.body);
    response.redirect("/");
});

// app.get("/users/:id", function(reqeust, response) {
//     console.log("The User Id Requested is: ", request.params.id);
//     response.send("You Requested the User with Id: " + request.params.id);
// });

app.listen(8000, function() {
    console.log("Listening on Port 8000");
});