var express = require("express");

app = express();

app.get("/", function(req, res) {
    res.send("express start");
})

app.listen(8000, function(){console.log("server run success")});