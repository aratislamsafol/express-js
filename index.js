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

app.get('/head', (req, res)=> {
    res.append('name', 'arat');
     res.append('age', 27);
     res.send("HEader");
})

app.get('/cookiesSet', (req, res)=> {
    res.cookie('name', 'arat')
    res.cookie('age', '30');
    res.end("cookies send success");
})

app.get('/cookiesClear', (req, res)=> {
    res.clearCookie('name')
    res.end("cookies send success");
})



app.listen(8000, ()=>console.log("successfully listen"));