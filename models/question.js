const mongoose = require("mongoose");
const { Schema } = mongoose;

const consentQuestionSchema = new Schema({
  question: String,
});

const preTestQuestionSchema = new Schema({
  question: String,
});

const postTest1QuestionSchema = new Schema({
  question: String,
});

const postTest2QuestionSchema = new Schema({
  question: String,
  checkBox: [String],
});

const postTest3QuestionSchema = new Schema({
  question: String,
});

module.exports = {
  ConsentQuestion: mongoose.model("consent_questions", consentQuestionSchema),
  PreTestQuestion: mongoose.model("pre_test_questions", preTestQuestionSchema),
  PostTest1Question: mongoose.model(
    "post_test_1_questions",
    postTest1QuestionSchema
  ),
  PostTest2Question: mongoose.model(
    "post_test_2_questions",
    postTest2QuestionSchema
  ),
  PostTest3Question: mongoose.model(
    "post_test_3_questions",
    postTest3QuestionSchema
  ),
};
