const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  repairShop: { type: mongoose.ObjectId, ref: 'RepairShop' },
  category: { type: mongoose.ObjectId, ref: 'Category' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Service', schema, 'services');