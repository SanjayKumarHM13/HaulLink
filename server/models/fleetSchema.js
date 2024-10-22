const mongoose = require('mongoose');

const fleetSchema = new mongoose.Schema({
    _id: Object,
    RegNum: String,
    model: String
})

module.exports = mongoose.model("Fleet", fleetSchema, 'fleets');