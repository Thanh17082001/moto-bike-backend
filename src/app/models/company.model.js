const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const company = new Schema({
    name: { type: String, default: '' },
});

module.exports = mongoose.model('company', company)
