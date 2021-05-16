const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const List = mongoose.model("List");

router.get("/allconatct", (req, res) => {
  List.find()
    .populate("postedBy", "_id name accountnumber phonenumber")
    .then((allcontact) => {
      res.json({ allcontact });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/list", (req, res) => {
  const { name, accountnumber, phonenumber } = req.body;
  if (!name || !accountnumber || !phonenumber) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  //req.user.password = undefined;
  const list = new List({
    name: name,
    accountnumber: accountnumber,
    phonenumber: phonenumber,
  });
  list
    .save()
    .then((result) => {
      res.json({ list: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
