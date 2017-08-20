import Queue from './Queue';

test('Queue of numbers', () => {
  const numberQueue = new Queue();
  expect(() => {
    numberQueue.peek();
  }).toThrow();
  expect(numberQueue.isEmpty()).toEqual(true);
  numberQueue.add(3);
  expect(numberQueue.peek()).toEqual(3);
  numberQueue.add(2);
  numberQueue.add(1);
  numberQueue.add(0);
  expect(numberQueue.remove()).toEqual(3);
  expect(numberQueue.remove()).toEqual(2);
  expect(numberQueue.remove()).toEqual(1);
  expect(numberQueue.remove()).toEqual(0);
  expect(() => {
    numberQueue.remove();
  }).toThrow();
});

test('Queue of strings', () => {
  const stringQueue = new Queue();
  stringQueue.add('3');
  stringQueue.add('2');
  stringQueue.add('1');
  expect(stringQueue.peek()).toEqual('3');
  stringQueue.clear();
  expect(() => {
    stringQueue.peek();
  }).toThrow();
  expect(() => {
    stringQueue.remove();
  }).toThrow();
});
