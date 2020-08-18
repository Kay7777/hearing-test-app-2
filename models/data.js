const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  email: String,
  location: Object,
  consents: Object,
  hearing: Object,
  birth: Number,
  result: String,
  volume: Number,
  SNR: Number,
  timer: [Number],
  date: String,
});

module.exports = mongoose.model("user_datas", dataSchema);
