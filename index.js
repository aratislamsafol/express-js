const express = require("express");
const multers = require("multer");
var multer =multers();

app = express();
app.use(multer.array());
app.use(express.static('public'))

// Json Application request
app.post("/", (req, res)=>{
    res.send(JSON.stringify(req.body));
})

app.listen(8000, ()=>console.log("successfully Hit the Server"));