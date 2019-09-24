const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  brand: { type: mongoose.ObjectId, ref: 'Brand' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Vehicle', schema, 'vehicles');