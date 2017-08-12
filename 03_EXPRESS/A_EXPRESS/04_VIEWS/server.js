var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.get('/', function(request, response) {
    response.send("Hello Express")
})

app.listen(8000, function() {
    console.log("Listening on Port 8000");
})