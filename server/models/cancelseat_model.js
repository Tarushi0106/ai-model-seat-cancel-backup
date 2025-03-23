const mongoose = require('mongoose');

const cancelSeatSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    seatnumber: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Seat', cancelSeatSchema);
