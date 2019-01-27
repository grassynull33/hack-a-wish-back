const path = require('path');
const child = require('./routes/child');

module.exports = app => {
  app.use('/apis/child', child);

  // eslint-disable-next-line no-unused-vars
  app.use((req, res, next) =>
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  );

  // If error is passed from next(error)
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (!err.statusCode) {
      // eslint-disable-next-line no-param-reassign
      err.statusCode = 500;
    }

    return res.status(err.statusCode).send(err.message);
  });
};
