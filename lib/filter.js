module.exports = (collection, cb) => {
  let result = [];
  collection.forEach((item, index) => {
    if (cb(item, index, collection)) {
      result.push(item);
    }
  });
  return result;
};
