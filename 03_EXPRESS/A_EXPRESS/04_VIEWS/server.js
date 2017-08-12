var express = require("express");
var app = express();

// serve static files, pre EJS
// app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get('/', function(request, response) {
    response.send("Hello Express")
})

app.get("/users", function(request, response) {
    // info
    var usersArray = [
        { name: "Michael", email: "michael@codingdojo.com" },
        { name: "Jay", email: "jay@codingdojo.com" },
        { name: "Brendan", email: "brendan@codingdojo.com" },
        { name: "Andrew", email: "andrew@codingdojo.com" }
        // {name: "", email: ""}
    ];
    response.render("users", { users: usersArray });
})

app.listen(8000, function() {
    console.log("Listening on Port 8000");
})