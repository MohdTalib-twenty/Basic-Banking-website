const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  },
  accountnumber: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
});

mongoose.model("List", listSchema);
