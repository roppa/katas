module.exports = (collection, cb, accumulator) => {
  let index = 0;

  if (!accumulator) {
    accumulator = collection[index++];
  }

  for (; index < collection.length; index++) {
    accumulator = cb(accumulator, collection[index], index, collection);
  }

  return accumulator;
};
