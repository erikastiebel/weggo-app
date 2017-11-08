'use strict';

const path = require("path");
const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello world from Express!!");
});

app.listen(8888, function(){
    console.log("Example app listening on port 8888");

});
