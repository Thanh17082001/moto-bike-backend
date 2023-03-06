const { ObjectId } = require("mongodb");
const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const product= new Schema({
    idCategory:{type:ObjectId, require: true},
    name: { type: String, default: '' },
    price: { type: Number, min: 0,},
    quanlity: { type: Number, min: 0,},
    imgUrl: { type: String,},
    deleted:{ type: Boolean, default: false}
  }, { timestamps: true });

module.exports=mongoose.model('product',product)