const mongoose = require('mongoose');

const schema = mongoose.Schema({
  status: {
    type: Number,
    required: true,
    enum: [1, 2, 3],
    default: 1
  },
  status_payment: {
    type: Number,
    required: true,
    enum: [1, 2],
    default: 1
  },
  price: { type: Number, require: true },
  delivery_date: { type: Date, required: true },
  client: { type: mongoose.ObjectId, ref: 'Client', required: true },
  service: [{ type: mongoose.ObjectId, ref: 'Service', required: true }],
  repairShop: { type: mongoose.ObjectId, ref: 'RepairShop', required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('ClientService', schema, 'clientServices');