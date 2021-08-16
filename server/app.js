// modules
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

dotenv.config({ path:'./config.env'});
require('./db/conn');
app.use(express.json());
app.use(cookieParser()) ;   
const User = require('./model/userSchema')


// other includes
app.use(require('./routes/auth'))
const Port = process.env.PORT;



// ----------routes----------//



// about
// app.get('/about', async (req, res) => {
//     try {
//         res.send("<h1>About page</h1>")
//     }
//     catch (err) {
//         res.send(err.message)
//     }
// });

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