var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
  name: String,
  // mealType: [String],
  address: String,
  phone: String,
  contact: String,
  yelp: String,
  website: String,
  menu: String,
  image: String,
  facebook: String,
  requests: {
    type: Schema.Types.ObjectId,
    ref: 'Request'
  }
});

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
