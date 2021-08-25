const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const bcrypt = require("bcrypt");
const authenticate = require("./../middleware/authenticate")
const jwt = require("jsonwebtoken");

// GET => home
router.get("/", function (req, res) {
  res.send("router");
});

// POST => regisetr
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "this is fill error" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password not match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      const userRegister = await user.save();
      res.status(201).json({ message: "User saved successfully" });
    }
  } catch (err) {
    console.log("error: " + err.message);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isAuthenticated = await bcrypt.compare(
        password,
        userLogin.password
      );
      const token = await userLogin.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 258900000),
        httpOnly: true,
      });

      if (!isAuthenticated) {
        res.status(400).json({ error: "invalid credentials" });
      } else {
        res.status(200).json({ message: "user logged in successfully" });
      }
    } else {
      res.status(400).json({ error: "invalid credentials2" });
    }
  } catch (err) {
    res.status(400).json("error3: " + err.message);
  }
});

// about us
router.get('/about',authenticate, (req, res) => {
    console.log("about  route")
      res.send(req.rootUser); 
});

// getting data
router.get('/getdata',authenticate, (req, res) => {
      console.log("get  route")
      res.send(req.rootUser); 
});

module.exports = router;
