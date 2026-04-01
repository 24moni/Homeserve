const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Service', serviceSchema)
