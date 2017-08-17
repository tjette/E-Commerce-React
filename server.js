const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 3001;

mongoose.connect('mongodb://localhost/shopping-cart');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;
