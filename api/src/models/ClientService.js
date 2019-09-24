const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, require: true },
  delivery_date: { type: Date, required: true },
  client: { type: mongoose.ObjectId, ref: 'Client' }
}, {
  timestamps: true,
});

module.exports = mongoose.model('ClientService', schema, 'clientServices');