var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SoupKitchenSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  location: {
        lat: {
          type: Number,
          default: 37.78
        },
        lng: {
          type: Number,
          default: -122.44
        }
      }
});

var soupKitchen = mongoose.model('SoupKitchen', SoupKitchenSchema);

module.exports = SoupKitchen;
