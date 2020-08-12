const mongoose = require("mongoose");
const { Schema } = mongoose;

const dataSchema = new Schema({
  id: String,
  version: Number,
  result: String,
  volume: Number,
  SNR1: Number,
  timer1: [Number],
  date1: String,
  SNR2: Number,
  timer2: [Number],
  result2: String,
  date2: String,
});

module.exports = mongoose.model("datas", dataSchema);
