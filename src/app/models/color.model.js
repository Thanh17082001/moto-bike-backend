const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const color = new Schema({
  nameColor: { type: String, default: "" },
  colorCode: { type: String, default: "" }
});


module.exports = mongoose.model("color", color);

