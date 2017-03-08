let getPrimeFactors = require('../lib/prime-factors');
const test = require('tape').test;

test('getPrimeFactors', assert => {
  assert.equals(typeof getPrimeFactors, 'function', 'should be a function');
  assert.end();
});

test('Calling getPrimeFactors with invalid parameters', assert => {
  assert.throws(() => { getPrimeFactors(); }, '', 'should throw');
  assert.end();
});

test('Calling getPrimeFactors with 1', assert => {
  assert.ok(Array.isArray(getPrimeFactors(1)), 'should return an array');
  assert.end();
});

test('Calling getPrimeFactors with 2', assert => {
  assert.deepEquals(getPrimeFactors(2), [2], 'should return [2]');
  assert.end();
});

test('Calling getPrimeFactors with 3', assert => {
  assert.deepEquals(getPrimeFactors(3), [3], 'should return [3]');
  assert.end();
});

test('Calling getPrimeFactors with 4', assert => {
  assert.deepEquals(getPrimeFactors(4), [2, 2], 'should return [2, 2]');
  assert.end();
});

test('Calling getPrimeFactors with 6', assert => {
  assert.deepEquals(getPrimeFactors(6), [2, 3], 'should return [2, 3]');
  assert.end();
});

test('Calling getPrimeFactors with 8', assert => {
  assert.deepEquals(getPrimeFactors(8), [2, 2, 2], 'should return [2, 2, 2]');
  assert.end();
});

test('Calling getPrimeFactors with 9', assert => {
  assert.deepEquals(getPrimeFactors(9), [3, 3], 'should return [3, 3]');
  assert.end();
});
