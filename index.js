const express = require("express");
const app = express();

const { json } = require("body-parser");
app.use(json());

const keys = require("./config/keys");
const mongoose = require("mongoose");

mongoose
  .connect(keys.mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

const UserDataRouter = require("./routes/user-data");
const QuestionRouter = require("./routes/questions");
app.use(UserDataRouter);
app.use(QuestionRouter);

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Listen to 4000"));
