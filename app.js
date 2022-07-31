const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

const db = require('./app/models');
const notes = require('./app/routes/note.routes');

// TODO: Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/notes/', notes);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

app.listen(port, () => {
  console.log(`Server running in port: http://localhost:${port}`);
});
