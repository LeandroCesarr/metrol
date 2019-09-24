const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, require: true },
  quantify: { type: Number, required: true },
  category: { type: mongoose.ObjectId, ref: 'Category' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', schema, 'products');