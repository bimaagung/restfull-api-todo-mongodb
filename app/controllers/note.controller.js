const db = require('../models');
const NoteModel = db.notes;

const create_note = async (req, res) => {
  const notes = req.body;

  try {
    const create_note = await NoteModel.create(notes);
    if (!create_note) {
      res.status(400).json({
        status: 'fail',
        data: [],
      });
    } else {
      res.status(201).json({
        status: 'success',
        data: notes,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error while retrieving notes',
    });
  }
};

const all_note = async (req, res) => {
  try {
    const notes = await NoteModel.find();

    if (!notes) {
      res.status(400).json({
        status: 'fail',
        data: [],
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: notes,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error while retrieving notes',
    });
  }
};

const get_note_by_id = async (req, res) => {
  const { id } = req.params;

  try {
    const note_by_id = await NoteModel.findById(id);

    if (!note_by_id) {
      res.status(400).json({
        status: 'fail',
        data: [],
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: note_by_id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error while retrieving notes',
    });
  }
};

const update_note = async (req, res) => {
  const { id } = req.params;
  const note_body = req.body;
  try {
    const note_by_id = await NoteModel.updateOne({ _id: id }, note_body);

    if (!note_by_id) {
      res.status(400).json({
        status: 'fail',
        data: [],
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: note_by_id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error while retrieving notes',
    });
  }
};

const delete_note = async (req, res) => {
  const { id } = req.params;

  try {
    const delete_note_by_id = await NoteModel.deleteOne({ _id: id });
    if (!delete_note_by_id) {
      res.status(400).json({
        status: 'fail',
        data: [],
      });
    } else {
      res.status(200).json({
        status: 'success',
        data: delete_note_by_id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || 'Some error while retrieving notes',
    });
  }
};

module.exports = {
  all_note,
  create_note,
  get_note_by_id,
  update_note,
  delete_note,
};
