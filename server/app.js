// modules
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({ path:'./config.env'});
require('./db/conn');
app.use(express.json());
const User = require('./model/userSchema')


// other includes
app.use(require('./routes/auth'))
const Port = process.env.PORT;

// middlewares
const middleware = (req,res,next) =>{
    console.log("middleware called ");
next();
}

// ----------routes----------//

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
app.get('/about', middleware, async (req, res) => {
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
    console.log("listening on Port " + Port);
    console.log('Your server available at http://localhost:8000')
});