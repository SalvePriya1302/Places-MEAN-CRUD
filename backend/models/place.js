const mongoose = require('mongoose');
const placeSchema = mongoose.Schema({
  placename: {type: String},
  city: {type: String},
  country: {type: String}

});

 module.exports = mongoose.model('Place', placeSchema);
