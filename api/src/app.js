const express = require('express');
const notifier = require('node-notifier');
const nomralizePort = require('./config/port');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const database = require('./config/database');
const logger = require('morgan');
database('mongodb://localhost:27017/metrol');

const app = express();
const port = nomralizePort(process.env.PORT || '4000');

app.use(router);
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  notifier.notify({
    title: `Metrol: ${port}`,
    message: 'Build succesfull'
  });
})