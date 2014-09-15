var db = require('lib/db');

//Main data storage model
var DbTrip = db.model('Trip', {
  id: {
    type: String,
    required: true,
    hashKey: true,
  },
  bookings: {
    type: [String]
  },
  email:{
    type: String,
    required: true
  }
});

module.exports = DbTrip;