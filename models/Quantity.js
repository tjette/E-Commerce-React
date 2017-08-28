const mongoose = require('mongoose')

const QuantitySchema = new mongoose.Schema({
  quantity: { type: Number, required: true }
})

module.exports = mongoose.model('Quantity', QuantitySchema)
