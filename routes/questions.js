const express = require("express");
const router = express.Router();
const { Page1Question, Page3Question } = require("../models/question");

router.get("/api/page1/questions", async (req, res) => {
  const data = await Page1Question.find();
  res.send(data);
});

router.post("/api/page1/questions", async (req, res) => {
  const data = await new Page1Question(req.body).save();
  res.send(data);
});

router.delete("/api/page1/questions/:id", async (req, res) => {
  const data = await Page1Question.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.get("/api/page3/questions", async (req, res) => {
  const data = await Page3Question.find();
  res.send(data);
});

router.post("/api/page3/questions", async (req, res) => {
  const data = await new Page3Question(req.body).save();
  res.send(data);
});

router.delete("/api/page3/questions/:id", async (req, res) => {
  const data = await Page3Question.findByIdAndDelete(req.params.id);
  res.send(data);
});

module.exports = router;
