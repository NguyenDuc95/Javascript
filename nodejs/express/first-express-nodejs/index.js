var express = require("express");
var bodyParser = require("body-parser");

var urlencodeParser = bodyParser.urlencoded({extended:false});
var app = express();
app.listen(3000);// open port to lissen
//route in express
// route like đường dẫn
// domain
//request - response: 
// req: get - post
//
app.get("/hello",(req,res)=>{
    res.send("<font color=blue>something here</font>");// send method  
});

app.post("/hello",(req,res)=>{
    res.send("Posting")
});

app.get("/tintuc/:id",(req,res)=>{
    var get_id = req.params.id;
    res.send(`server received id: ${get_id}`);
});

