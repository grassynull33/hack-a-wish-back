const resources = require('./routes/resources');

module.exports = app => {
  app.use('/apis/resources', resources);

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
