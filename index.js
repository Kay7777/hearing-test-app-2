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
  let data;
  const {
    SNR1,
    SNR2,
    timer1,
    timer2,
    id,
    round,
    result,
    volume,
    version,
  } = req.body;
  if (round === 1) {
    data = await new Data({
      id,
      version,
      volume,
      result,
      SNR1,
      timer1,
      date1: new Date().toLocaleString("en-US", { timeZone: "America/Denver" }),
    }).save();
  } else {
    data = await Data.findOneAndUpdate(
      { id },
      {
        SNR2,
        timer2,
        date2: new Date().toLocaleString("en-US", {
          timeZone: "America/Denver",
        }),
      }
    );
  }
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
