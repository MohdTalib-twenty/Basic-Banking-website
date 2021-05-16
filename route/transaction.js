const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Transaction = mongoose.model("Transaction");

router.get("/history", (req, res) => {
  Transaction.find()
    .populate("postedBy", "_id name accountnumber rupees")
    .then((history) => {
      res.json({ history });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/transaction", (req, res) => {
  const { name, accountnumber, rupees } = req.body;
  if (!name || !accountnumber || !rupees) {
    return res.status(422).json({ error: "Please add all the fields" });
  }
  //req.user.password = undefined;
  const transaction = new Transaction({
    name: name,
    accountnumber: accountnumber,
    rupees: rupees,
  });
  transaction
    .save()
    .then((result) => {
      res.json({ transaction: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
