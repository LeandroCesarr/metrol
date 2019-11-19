const express = require('express');
const notifier = require('node-notifier');
const normalizePort = require('./config/port');
const router = require('./routes/router');
const bodyParser = require('body-parser');
const database = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors');
const metrol = require('./config/metrol.js');

const app = express();
const port = normalizePort(process.env.PORT || '8888');

app.use(cors());
app.use(bodyParser.json());
database.init();
dotenv.config();
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, console.log(metrol),() => {
  notifier.notify({
    title: `Metrol: ${port}`,
    message: 'Build succesfull'
  });
})