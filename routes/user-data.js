const express = require("express");
const router = express.Router();
const Data = require("../models/data");

router.post("/api/user/data", async (req, res) => {
  console.log(req.body);
  const {
    email,
    location,
    consents,
    hearing,
    birth,
    result,
    volume,
    SNR,
    timer,
  } = req.body;
  const data = await new Data({
    email,
    location,
    consents,
    hearing,
    birth,
    result,
    volume,
    SNR,
    timer,
    date: new Date().toLocaleString("en-US", { timeZone: "America/Denver" }),
  })
    .save({ checkKeys: false })
    .catch((err) => console.log(err));
  res.status(201).send(data);
});

router.get("/api/user/data/", async (req, res) => {
  const data = await Data.find();
  res.status(200).send(data);
});

router.get("/api/user/data/:id", async (req, res) => {
  const data = await Data.findOne({ id: req.params.id });
  res.send(data);
});

router.delete("/api/user/data/:id", async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.send({});
});

module.exports = router;
