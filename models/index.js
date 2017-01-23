var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/feedable');

module.exports.Restaurant = require('./restaurants.js');
module.exports.SoupKitchen = require('./soupKitchen.js');
