const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db_config = {
  mongoose: mongoose,
  url: 'mongodb://localhost:27017/todo',
};

db_config.mongoose
  .connect(db_config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch((err) => {
    console.log('Failed connect to the database!', err);
    process.exit();
  });

module.exports = db_config;
