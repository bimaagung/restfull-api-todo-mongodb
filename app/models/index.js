const config = require('../../config/config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {
  mongoose: mongoose,
  url: config.url,
  notes: require('./note.model')(mongoose),
};

module.exports = db;
