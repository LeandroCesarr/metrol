const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, require: true },
  quantity: { type: Number, required: true },
  category: { type: mongoose.ObjectId, ref: 'Category' },
  repairShop: {type: mongoose.ObjectId, ref: 'RepairShop'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', schema, 'products');