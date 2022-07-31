const express = require('express');
const route = express.Router();

const noteController = require('../controllers/note.controller');

route.get('/', noteController.findAll);

module.exports = route;
