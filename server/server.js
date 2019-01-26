// common utils
const logger = require('morgan');

// Express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').load();

const app = express();
const PORT = 5000;

/* eslint-disable no-console */
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

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

app.get('/', (req, res) => res.status(200).end());

require('./routes')(app);

/** *********************************** */
//* ****// Initalize Port listen
/** *********************************** */

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running at :${PORT}`);
});
