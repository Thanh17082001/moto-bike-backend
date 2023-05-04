const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const news = new Schema({
  name: { type: String, default: "" },
  imgUrl: { type: String,},
  description:{ type: String, default:""}
}, { timestamps: true });


module.exports = mongoose.model("news", news);

