var express = require("express");
console.log(express);

var app = express();
console.log(app);

app.get('/', function(request, response) {
    response.send("Hello Express")
});

app.listen(8000, function() {
    console.log("Listening on Port 8000");
});