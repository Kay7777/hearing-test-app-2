const mongoose = require("mongoose");
const { Schema } = mongoose;

const page1QuestionSchema = new Schema({
  question: String,
});

const page3QuestionSchema = new Schema({
  question: String,
});

module.exports = {
  Page1Question: mongoose.model("page1_questions", page1QuestionSchema),
  Page3Question: mongoose.model("page3_questions", page3QuestionSchema),
};
