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

  schema.method('toJson', function () {
    const { _v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Note = mongoose.model('note', schema);

  return Note;
};

module.exports = NoteModel;
