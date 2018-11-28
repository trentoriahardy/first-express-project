const express = require('express');//const variable express is now equal to express framework
const app = express();//express is now equal to app variable//creating a new instance of an express server.. instantuating..it builds app

app.get('/', (req, res) =>{
    res.send("Hello World :)!");
}); //when a get request is made to this url we are requesting certain info

app.get('/about', (req, res) =>{
    res.send("This is the About Page ;-)!");
});

app.get('/help', (req, res) =>{
    res.send("Help Me!");
});

app.get('/contact', (req, res) =>{
    res.send("Contact Us!");
});


app.listen(3000);
console.log('Hello!')
console.log('Hello1')
//require imports express from folder
