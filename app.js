// modules
const express = require('express');

// other includes
const app = express();
const Port = 8000;

// routes
// home
app.get('/',async (req, res) => {
    try {
        res.send("<h1>Home page</h1>")
    }
    catch (err) {
        res.send(err.message)
    }
});

// about
app.get('/about',async (req, res) => {
    try {
        res.send("<h1>About page</h1>")
    }
    catch (err) {
        res.send(err.message)
    }
});

// contact
app.get('/contact',async (req, res) => {
    try {
        res.send("<h1>contact page</h1>")
    }
    catch (err) {
        res.send(err.message)
    }
});

// signin
app.get('/signin',async (req, res) => {
    try {
        res.send("<h1>signin page</h1>")
    }
    catch (err) {
        res.send(err.message)
    }
});

// signup
app.get('/signup',async (req, res) => {
    try {
        res.send("<h1>signup page</h1>")
    }
    catch (err) {
        res.send(err.message)
    }
});


// server listening
app.listen(Port,()=>{
    console.log("listening on port " + Port);
    console.log('Your server available at http://localhost:8000')
});