const express = require("express");
const multer = require("multer");

app = express();

app.use(express.static('public'))

// application level middleware
app.use(function (req, res, next) {
    console.log("Application level Middleware")
    next();
})

app.get('/', (req, res)=> {
    res.send("Home Page")
})

app.get('/contact', (req, res)=> {
    res.send("Contact Page")
})
// spacifing routing middleware
app.use('/terms', (req, res, next)=> {
    console.log("i am routing middleware");
    next();
    res.send("terms Page");
})

app.listen(8000, ()=>console.log("successfully Hit the Server"));