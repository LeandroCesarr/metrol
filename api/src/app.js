const express = require('express');
const notifier = require('node-notifier');
const normalizePort = require('./config/port');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const database = require('./config/database');
const dotenv = require('dotenv');

const app = express();
const port = normalizePort(process.env.PORT || '8000');

app.use(bodyParser.json());
database.init();
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
  notifier.notify({
    title: `Metrol: ${port}`,
    message: 'Build succesfull'
  });
})