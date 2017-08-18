// require mongoose
var mongoose = require("mongoose");
// fs modeule for loading models
var fs = require("fs");
// path for models path
var path = require("path");
// connect to mongoose
mongoose.connect("mongodb://localhost/04_C_04_09_OUR_APP");
// create varable for teh model path
var modelsPath = path.join(__dirname, "./../models");
// read all of the files in modelsPath and require each of javascript files
fs.readdirSync(modelsPath).forEach(function(file){
  if(file.indexOf(".js") >= 0){
    // require the file
    // require(`${modelsPath} "/" ${file}`)
    require(modelsPath + "/" + file);
  }
});
