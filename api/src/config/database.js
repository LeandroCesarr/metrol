const mongoose = require('mongoose');
const env = require('./env');
const host = env('DB_HOST');
const password = env('DB_PASSWORD');

module.exports = {
  init() {
    mongoose.connect(`mongodb+srv://${host}:${password}@cluster0-pky5x.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })

    mongoose.connection.on('connected', () => console.log(`MongoDB connected`));
  }
}