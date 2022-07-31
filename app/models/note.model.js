const NoteModel = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: String,
      body: String,
    },
    {
      timestamps: true,
    },
  );

  schema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Note = mongoose.model('notes', schema);

  console.log(Note);
  return Note;
};

module.exports = NoteModel;
