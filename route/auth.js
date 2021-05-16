const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../key");

const requireLogin = require("../middleware/requireLogin");

router.post("/protected", requireLogin, (req, res) => {
  res.send("hello user");
});
router.post("/signup", (req, res) => {
  const { name, accountnumber, password, email } = req.body;
  if (!name || !accountnumber || !password || !email) {
    return res.status(422).json({ error: "please add  all the fields" });
  }
  User.findOne({
    email: email,
  })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "email already exists" });
      }
      bcrypt.hash(password, 12).then((hashedpassword) => {
        const user = new User({
          name,
          password: hashedpassword,
          accountnumber,
          email,
        });
        user
          .save()
          .then((user) => {
            res.json({ message: "saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add name and password" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Invalid email or password" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, accountnumber, email } = savedUser;
          res.json({ token, user: { _id, name, accountnumber, email } });
        } else {
          return res.status(422).json({ error: "Invalid password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
