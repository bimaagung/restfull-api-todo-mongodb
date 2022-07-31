const express = require('express');
const route = express.Router();

const noteController = require('../controllers/note.controller');

route.get('/', noteController.all_note);
route.get('/:id', noteController.get_note_by_id);
route.post('/', noteController.create_note);
route.put('/:id', noteController.update_note);
route.delete('/:id', noteController.delete_note);

module.exports = route;
