const mongoose = require('mongoose');

module.exports = (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.set('useFindAndModify', false);
  mongoose.set('useCreateIndex', true);

  mongoose.connection.on('connected', () => console.log(`MongoDB connected: ${uri}`));
  mongoose.connection.on('disconnected', () => console.log(`MongoDB diconnected: ${uri}`));
  mongoose.connection.on('error', (error) => console.log(`MongoDB error: ${error}`));
  process.on('SIGINT', () => {
    process.exit(0);
  });
}