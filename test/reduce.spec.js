const test = require('tape').test;
const reduce = require('../lib/reduce');

test('Reduce function', assert => {
  assert.equals(typeof reduce, 'function', 'function should exist');
  assert.end();
});

test('Reduce a single value', assert => {
  assert.equals(reduce([1], param => param), 1, 'should return the value');
  assert.end();
});

test('Reduce 1, 2', assert => {
  assert.equals(reduce([1, 2], (a, b) => a + b), 3, 'should return 3');
  assert.end();
});

test('Reduce 1, 2, 3, 4', assert => {
  assert.equals(reduce([1, 2, 3, 4], (a, b) => a + b), 10, 'should return 10');
  assert.end();
});

test('Reduce 1, 2, 3, 4 with 10 as accumulator', assert => {
  assert.equals(reduce([1, 2, 3, 4], (a, b) => a + b, 10), 20, 'should return 20');
  assert.end();
});

test('Reduce a, b, c with hello as accumulator', assert => {
  assert.equals(reduce(['a', 'b', 'c'], (a, b) => a + b, 'hello '),
   'hello abc', 'should return hello abc');
  assert.end();
});
