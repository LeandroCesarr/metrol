const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String,  require: true, index: { unique: true } },
  board: { type: String,  require: true, index: { unique: true } },
  vehicle: { type: mongoose.ObjectId, ref: 'Vehicle' },
  repairShop: { type: mongoose.ObjectId, ref: 'RepairShop'},
  cpf: { type: String, required: true, index: { unique: true} },
  address: { type: String },

}, {
  timestamps: true,
});

module.exports = mongoose.model('Client', schema, 'customers');