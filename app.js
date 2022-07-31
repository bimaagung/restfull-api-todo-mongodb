require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

const notes = require('./app/routes/note.routes');

// TODO: Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/notes/', notes);

app.listen(port, () => {
  console.log(`Server running in port: http://localhost:${port}`);
});
