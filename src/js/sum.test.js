const sum = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});

test('adds 10 + 3 to equal 13', () => {
  expect(sum(10, 3)).toBe(13);
});

test('adds 80 + 1 to equal 81', () => {
  expect(sum(80, 1)).toBe(81);
});

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
