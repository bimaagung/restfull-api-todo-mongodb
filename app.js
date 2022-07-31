const express = require('express');
const morgan = require('morgan');
const router = require('./router/TodoRouter');
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Server running in port: ${port}`);
});
