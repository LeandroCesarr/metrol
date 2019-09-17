const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  theme_color: { type: String, default: 'dracula' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('RepairShop', schema, 'repairShops');