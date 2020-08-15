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
const Data = require("./models/data");

app.post("/api/data", async (req, res) => {
  console.log(req.body);
  const { SNR, timer, id, result, volume, version } = req.body;
  const data = await new Data({
    id,
    version,
    volume,
    result,
    SNR,
    timer,
    date: new Date().toLocaleString("en-US", { timeZone: "America/Denver" }),
  }).save();
  res.status(201).send(data);
});

app.get("/api/data", async (req, res) => {
  const data = await Data.find();
  res.status(200).send(data);
});

app.get("/api/data/:id", async (req, res) => {
  const data = await Data.findOne({ id: req.params.id });
  res.send(data);
});

app.delete("/api/data/:id", async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.send({});
});

if (["production", "ci"].includes(process.env.NODE_ENV)) {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("Listen to 4000"));
