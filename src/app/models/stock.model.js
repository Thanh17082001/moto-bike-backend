const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const Schema = mongoose.Schema;

const stock = new Schema({
    idColor:{type:ObjectId, require: true},
    idProduct:{ type: ObjectId, require: true},

});


module.exports = mongoose.model("stock", stock);