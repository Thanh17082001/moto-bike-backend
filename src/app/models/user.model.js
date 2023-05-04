const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const user = new Schema({
  name: { type: String, default: "" },
  email:{type: String, default: "" },
  isAdmin:{type:Boolean, default:false},
  password:{type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model("user", user);

