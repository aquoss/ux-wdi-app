var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RequestSchema = new Schema({
  type: String,
  date: Date,
  time: Date,
  soupKitchen: String
});

var Request = mongoose.model('Request', RequestSchema);

module.exports = Request;
