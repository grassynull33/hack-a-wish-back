const getChildren = Child => async () => {
  // param validation

  const workers = await Child.find();

  return workers;
};

const createChildren = Child => async ({ children, createdAt }) => {
  const bulkOps = [];

  children.forEach(c => {
    bulkOps.push({
      insertOne: {
        document: {
          ...c,
          createdAt,
        },
      },
    });
  });

  const res = await Child.bulkWrite(bulkOps);

  return res;
};

const editChild = Child => async ({ childId, editedChild, updatedAt }) => {
  if (!childId) {
    throw new Error('Missing child ID');
  }

  if (!editedChild) {
    throw new Error('Missing edited child data');
  }

  const query = { _id: childId };

  const update = {
    $set: {
      ...editedChild,
      updatedAt,
    },
  };

  const options = { new: true };

  const worker = await Child.findOneAndUpdate(query, update, options);

  return worker;
};

const deleteChild = Child => async childId => {
  if (!childId) {
    throw new Error('Missing child ID');
  }

  const query = { _id: childId };

  const child = await Child.findOneAndRemove(query);

  return child;
};

module.exports = Child => ({
  getChildren: getChildren(Child),
  createChildren: createChildren(Child),
  editChild: editChild(Child),
  deleteChild: deleteChild(Child),
});
