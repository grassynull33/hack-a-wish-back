// common utils
const logger = require('morgan');
const Promise = require('bluebird');
const path = require('path');

// Express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').load();

const app = express();
const PORT = 5000;
let db;

/* eslint-disable no-console */
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
  promiseLibrary: Promise,
  useNewUrlParser: true,
});

// eslint-disable-next-line prefer-const
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mongoose connection successful.');
});

/** *********************************** */
//* ****// Express & Webpack Middleware
/** *********************************** */

app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(cors()); // Enable CORS from client-side
app.use(bodyParser.json()); // parse application/json
app.use(logger('dev'));

/** *********************************** */
//* ****// Initialize Routes
/** *********************************** */
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', (req, res) => res.status(200).end());

require('./routes')(app);

/** *********************************** */
//* ****// Initalize Port listen
/** *********************************** */

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at :${PORT}`);
  console.log(`Mongo URI: ${process.env.MONGODB_URI}`);
});
