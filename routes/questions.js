const express = require("express");
const router = express.Router();
const {
  ConsentQuestion,
  PreTestQuestion,
  PostTest1Question,
  PostTest2Question,
  PostTest3Question,
} = require("../models/question");

router.get("/api/consent/questions", async (req, res) => {
  const data = await ConsentQuestion.find();
  res.send(data);
});

router.post("/api/consent/questions", async (req, res) => {
  const data = await new ConsentQuestion(req.body).save();
  res.send(data);
});

router.delete("/api/consent/questions/:id", async (req, res) => {
  const data = await ConsentQuestion.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.get("/api/pre-test/questions", async (req, res) => {
  const data = await PreTestQuestion.find();
  res.send(data);
});

router.post("/api/pre-test/questions", async (req, res) => {
  const data = await new PreTestQuestion(req.body).save();
  res.send(data);
});

router.delete("/api/pre-test/questions/:id", async (req, res) => {
  const data = await PreTestQuestion.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.get("/api/post-test-1/questions", async (req, res) => {
  const data = await PostTest1Question.find();
  res.send(data);
});

router.post("/api/post-test-1/questions", async (req, res) => {
  const data = await new PostTest1Question(req.body).save();
  res.send(data);
});

router.delete("/api/post-test-1/questions/:id", async (req, res) => {
  const data = await PostTest1Question.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.get("/api/post-test-2/questions", async (req, res) => {
  const data = await PostTest2Question.find();
  res.send(data);
});

router.post("/api/post-test-2/questions", async (req, res) => {
  const data = await new PostTest2Question(req.body).save();
  res.send(data);
});

router.delete("/api/post-test-2/questions/:id", async (req, res) => {
  const data = await PostTest2Question.findByIdAndDelete(req.params.id);
  res.send(data);
});

router.get("/api/post-test-3/questions", async (req, res) => {
  const data = await PostTest3Question.find();
  res.send(data);
});

router.post("/api/post-test-3/questions", async (req, res) => {
  const data = await new PostTest3Question(req.body).save();
  res.send(data);
});

router.delete("/api/post-test-3/questions/:id", async (req, res) => {
  const data = await PostTest3Question.findByIdAndDelete(req.params.id);
  res.send(data);
});

module.exports = router;
