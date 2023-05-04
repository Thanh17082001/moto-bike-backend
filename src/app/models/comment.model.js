const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;

const comment = new Schema({
  idUser:{type:ObjectId,require:true},
  idProduct:{type:ObjectId,require:true},
  username:{type:String},
  content:{type:String}
}, { timestamps: true });


module.exports = mongoose.model("comment", comment);

