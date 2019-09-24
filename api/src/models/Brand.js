const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {type: String, require: true},
  icon: {type: String, default: 'default'}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Brand', schema, 'brands');