const express = require("express");
const app = express();

const mongoose = require("mongoose");

const DB =
  "mongodb+srv://Talib:pagalworld@cluster0.1zufs.mongodb.net/Personaldata?retryWrites=true&w=majority";

const PORT = 8000;

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

require("./model/user");
require("./model/Transaction");
require("./model/List");

app.use(express.json());

app.use(require("./route/auth"));
app.use(require("./route/transaction"));
app.use(require("./route/list"));

app.listen(PORT, () => {
  console.log("successful");
});
