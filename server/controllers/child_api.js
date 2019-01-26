const ChildService = require('../models/Child');

exports.getChildren = async (req, res, next) => {
  try {
    const children = await ChildService.getChildren();

    return res.status(200).send(children);
  } catch (err) {
    return next(err);
  }
};

exports.createChildren = async (req, res, next) => {
  try {
    const { children } = req.body;
    const createdAt = Date.now();

    const child = await ChildService.createChildren({ children, createdAt });

    return res.status(200).send(child);
  } catch (err) {
    return next(err);
  }
};

exports.editChild = async (req, res, next) => {
  try {
    const { childId } = req.query;
    const { editedChild } = req.body;

    const updatedAt = Date.now();

    const child = await ChildService.editChild({
      childId,
      editedChild,
      updatedAt,
    });

    return res.status(200).send(child);
  } catch (err) {
    return next(err);
  }
};

exports.deleteChild = async (req, res, next) => {
  try {
    const { childId } = req.query;

    const child = await ChildService.deleteChild(childId);

    return res.status(200).send(child);
  } catch (err) {
    return next(err);
  }
};
