const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  repairShop: { type: mongoose.ObjectId, ref: 'RepairShop' }

}, {
  timestamps: true,
});

module.exports = mongoose.model('Category', schema, 'categories');