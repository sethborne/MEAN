// express
var express = require("express");
var app = express();
// bodyParser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/04_B_10_Assignment_10_Dojo_Message_Board");
// Schemas
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Message Author Required"] },
    messageContent: { type: String, required: [true, "Message Requires Content"], minlength: [ 5, "Message Requires Content Over 5 Characters"] },
    _comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, { timestamps: true });

mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Comment Author Required"] },
    commentContent: { type: String, required: [true, "Comment Requires Content"], minlength: [ 5, "Comment Requires Content Over 5 Characters"] },
    _message: { type: Schema.Types.ObjectId, ref: "Message"}
}, { timestamps: true});

mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");

// path
var path = require("path");
// chalk
var chalk = require("chalk");
var codeGreen = chalk.white.bgGreen;
var codeRed = chalk.white.bgRed;
var codeBlue = chalk.white.bgBlue;
// moment
var moment = require("moment");
// static
app.use(express.static(path.join(__dirname, "./static")));
// views
app.set("views", path.join(__dirname, "./views"));
// ejs
app.set("view engine", "ejs");
// ROUTES
// root
app.get("/", function(req, res){
    Message.find({}, false, true).populate("_comments").exec(function(err, allMessages){
        if(err){ console.log(err); }
        else{ 
            for(var i = 0; i < allMessages.length; i += 1){
                console.log(allMessages[i]._comments);
            }
        };
        res.render("index", { allMessages: allMessages, moment: moment });
    });
});

app.post("/message/add", function(req, res){
    console.log(req.body);
    var addMessage = new Message(req.body);
    addMessage.save(function(err){
        if(err){
            console.log("THIS IS ERROR LOGS " + err);
            res.render("index", { title: "Errors", errors: addMessage.errors })
        } else {
            console.log("PAST ERROR CHECK ELSE");
            res.redirect("/");
        }
    });
});

app.post("/comment/:id", function(req, res){
    console.log(req.body);
    Message.findOne({ _id: req.params.id }, function(err, message){
        var addComment = new Comment({name: req.body.name, commentContent: req.body.commentContent, _message: message._id });
        //update message
        Message.update({ _id: message._id}, {$push: {"_comments": addComment}}, function(err){
            if(err){ console.log("AT COMMENT POST - MESSAGE UPDATE ERROR"); }
            
            else{
                addComment.save(function(err){
                    if(err){
                        console.log("THIS IS ERROR LOGS " + err);
                        res.render("index", { title: "Errors", errors: addComment.errors})
                    } else {
                        console.log("PAST ERROR CHECK ELSE");
                        res.redirect("/");
                    }
                });
            }
        });
    });
});

let portNumber = 8000;
app.listen(portNumber, function(req, res){
    console.log(codeGreen(` Listening on Port ${portNumber} `));
});