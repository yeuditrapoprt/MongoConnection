const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const petSchema = mongoose.Schema({
    _id:ObjectId,   
    name:String,
    species:String
  });
  module.exports = mongoose.model('Pet',petSchema);