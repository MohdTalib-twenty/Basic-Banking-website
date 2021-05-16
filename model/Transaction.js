const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  accountnumber: {
    type: String,
    required: true,
  },
  rupees: {
    type: Number,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("Transaction", transactionSchema);
