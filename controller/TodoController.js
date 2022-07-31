class TodoController {
  static create_note = (req, res) => {
    res.status(200).json({ message: 'hallo' });
  };
}

module.exports = TodoController;
