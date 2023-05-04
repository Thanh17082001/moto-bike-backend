const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;

const order = new Schema(
  {
    idUser: { type: ObjectId, require: true },
    phone: { type: String, default: "" },
    address: { type: String ,default: "" },
    nameCustomer: { type: String, default: "" },
    status: { type: String,default:'pack' },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", order);
