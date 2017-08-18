// require mongoose
var mongoose = require("mongoose");
// fs module
var fs = require("fs");
// path
var path = require("path");
// connect
mongoose.connect("mongodb://localhost/04_C_11_Assignment_01_Modular_Mongoose_Dashboard");
// where my Models at?
var modelsPath = path.join(__dirname, "./../models");
// read all
fs.readdirSync(modelsPath).forEach(function(file) {
  if(file.indexOf(".js") >= 0){
    require(modelsPath + "/" + file)
  }
});
