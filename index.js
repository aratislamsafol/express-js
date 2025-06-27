const express = require("express");
var bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());

// Json Application request
app.post("/", (req, res)=>{
    let jsonData = req.body;
    let name = req.body.name;
    let city = req.body['city'];
    let stringify = JSON.stringify(jsonData)
    res.send(stringify + " " + name +" " + city);
})

app.listen(8000, ()=>console.log("successfully Hit the Server"));