const express = require('express');
const router = express.Router();
const todoController = require('../controller/TodoController');

router.get('/', todoController.create_note);

module.exports = router;
