var mongoose = require("mongoose");

//Schema?
var MongeeseSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Mongoose Name is Required"], minlength: [ 3, "Mongoose Name Needs at Least 3 Characters"] },
  age: { type: Number, required: [true, "Mongoose Age is Required"] },
  color: { type: String, required: [true, "Mongoose Color is Required"] },
  location: { type: String, required: [true, "Mongoose Location is Required"] }
  
}, { timestamps: true });

var Mongeese = mongoose.model("Mongeese", MongeeseSchema);
