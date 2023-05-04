const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderDetail = new Schema(
  {
    idOrder: { type: ObjectId, require: true },
    idProduct: { type: ObjectId, require: true },
    quanlityOrder:{type:Number},
    total:{type:Number}
  },
);

module.exports = mongoose.model("orderDetail", orderDetail);