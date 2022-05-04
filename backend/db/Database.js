const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`database connection successfull`);
    });
};

module.exports = connectDatabase;
