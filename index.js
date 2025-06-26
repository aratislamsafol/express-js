const express = require("express");

app = express();

// post request URL Query
app.post("/", (req, res)=>{
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;
    // post req ex - 
    res.send(firstName +" " + lastName);
})

app.listen(8000, ()=>console.log("successfully listen"));