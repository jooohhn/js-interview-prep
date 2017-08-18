import Stack from './Stack';

test('Stack of numbers', () => {
  const numberStack = new Stack();
  expect(() => {
    numberStack.peek();
  }).toThrow();
  expect(numberStack.isEmpty()).toEqual(true);
  numberStack.push(3);
  expect(numberStack.peek()).toEqual(3);
  numberStack.push(2);
  numberStack.push(1);
  numberStack.push(0);
  expect(numberStack.pop()).toEqual(0);
  expect(numberStack.pop()).toEqual(1);
  expect(numberStack.pop()).toEqual(2);
  expect(numberStack.pop()).toEqual(3);
  expect(() => {
    numberStack.pop();
  }).toThrow();
});

test('Stack of strings', () => {
  const stringStack = new Stack();
  stringStack.push('3');
  stringStack.push('2');
  stringStack.push('1');
  expect(stringStack.peek()).toEqual('1');
  stringStack.clear();
  expect(() => {
    stringStack.peek();
  }).toThrow();
  expect(() => {
    stringStack.pop();
  }).toThrow();
});
