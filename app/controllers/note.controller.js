const db = require('../models');
const NoteModel = db.note_model;

const findAll = (req, res) => {
  NoteModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error while retrieving notes',
      });
    });
};

module.exports = { findAll };
