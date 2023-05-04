const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const type = new Schema({
    name: { type: String, default: '' },
});

module.exports = mongoose.model('type', type)
