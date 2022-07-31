const mongoose = require('mongoose');
const { HOST, PORT, DATABASE } = process.env;

console.log(process.env.HOST);

mongoose.Promise = global.Promise;

const db_config = {
  mongoose: mongoose,
  url: `mongodb://${HOST}:${PORT}/${DATABASE}`,
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
