const express = require('express');
const Router = express.Router()
const Product = require('../models/Product')

Router.route('/')
  .get((req, res) => {
    Product.find((err, products) => {
      if (err) {
        res.json({ message: err, data: null })
      } else {
        res.json({ message: 'successfully retrieved all products', data: products })
      }
    })
  })

module.exports = Router
