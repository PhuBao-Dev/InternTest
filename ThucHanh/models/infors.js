const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Infor = new Schema({
    fullname: { type: String},
    email: {type: String},
    numberphone: {type: String},
    content: {type: String}, 
},{ versionKey: false, timestamps: true })

module.exports = mongoose.model('infors', Infor)