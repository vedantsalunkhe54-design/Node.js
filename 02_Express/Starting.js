const express = require('express');

const app = express();

app.get('/', (req,res) =>{
    res.send("hello world");
});

app.get('/about', (req,res) =>{
    res.send("About page"  + " " + req.query.name);
});


app.get('/contact', (req,res) =>{
    res.send("Contact page");
});

app.listen(3000, ()=> {
    console.log("Server is running on port 3000");
});