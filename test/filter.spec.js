const test = require('tape').test;
const filter = require('../lib/filter');

test('Filter function', assert => {
  assert.equals(typeof filter, 'function', 'should exist');
  assert.end();
});

test('Filter empty array', assert => {
  assert.deepEquals(filter([]), [], 'should return empty array');
  assert.end();
});

test('Filter 2 from 1, 2, 3', assert => {
  assert.deepEquals(filter([1, 2, 3], param => param !== 2), [1, 3], 'should return 1, 2');
  assert.end();
});
