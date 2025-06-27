const express = require("express");
const multer = require("multer");

app = express();

app.use(express.static('public'))

// parse json body
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
// Json Application request
app.post("/", (req, res)=>{
    res.send(JSON.stringify(req.body));
})
// file upload

var storage = multer.diskStorage({
    destination: function(req, res, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({storage:storage }).single('myfile');

app.post("/upload", (req, res)=>{
    upload(req, res, (err)=> {
        if(err) {
            return res.end("Error Uploading File")
        }else {
            res.end("file Uploaded")
        }
    })
})

app.listen(8000, ()=>console.log("successfully Hit the Server"));