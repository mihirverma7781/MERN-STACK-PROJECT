const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");


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
    }

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
  } catch (err) {
    console.log("error: " + err.message);
  }
});
module.exports = router;
