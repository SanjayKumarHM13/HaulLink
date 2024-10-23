const mongoose = require('mongoose');

const TruckBookingSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  service: {type: String, required: true},
  date: {type: String, required: true}
});

module.exports = mongoose.model('TruckBooking', TruckBookingSchema, 'truck_booking');