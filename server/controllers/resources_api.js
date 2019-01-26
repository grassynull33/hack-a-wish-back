const ResourcesService = require('../models/Resource');

exports.get = async (req, res, next) => {
  try {
    // const { authorization } = req.headers;

    const response = await ResourcesService.get();

    return res.status(200).send(response);
  } catch (err) {
    return next(err);
  }
};
