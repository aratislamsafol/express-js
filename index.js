const express = require("express");

app = express();

app.get("/", (req, res)=> res.send("Hello Express"))
app.post("/about", (req, res)=> res.send("About Express"))
app.delete("/contact", (req, res)=> res.send("Contact Express"))
app.put("/terms", (req, res)=> {
    res.status(201).end("Terms 201 Response")
})

app.listen(8000, ()=>console.log("successfully listen"));