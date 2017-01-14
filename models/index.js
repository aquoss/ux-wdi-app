var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/feedable');

module.exports.Restaurant = require('./restaurants.js');
