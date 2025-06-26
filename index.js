const express = require("express");

app = express();

app.get("/", (req, res)=> res.send("Hello Express"))
app.delete("/contact", (req, res)=> res.send("Contact Express"))
app.put("/terms", (req, res)=> {
    res.status(201).end("Terms 201 Response")
})
app.post("/about", (req, res)=> {
    let myJsonArr = [
        {
            name:'arat',
            city: 'Jashore',
            age: 26
        },
        {
            name:'arat2',
            city: 'Jashore',
            age: 26
        },
        {
            name:'arat3',
            city: 'Jashore',
            age: 26
        },
    ]

    res.json(myJsonArr);
})

app.get("/download", function(req, res){
    res.download('./upload/shirt.png')
})

app.get("/bangladesh", function(req, res){
    res.redirect('http://localhost:8000/india')
})

app.get("/india", function(req, res){
    res.send('this is india')
})



app.listen(8000, ()=>console.log("successfully listen"));