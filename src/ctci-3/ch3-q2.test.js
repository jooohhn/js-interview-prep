import MinStack from './ch3-q2';

describe('Stack Min', () => {
  test('O(1) push, pop, min', () => {
    const minStack = new MinStack();
    expect(minStack.isEmpty()).toEqual(true);
    minStack.push(10);
    expect(minStack.minStack.peek()).toEqual(10);
    expect(minStack.stack.peek()).toEqual(10);
    minStack.push(15);
    minStack.push(16);
    minStack.push(17);
    expect(minStack.minStack.peek()).toEqual(10);
    expect(minStack.stack.peek()).toEqual(17);
    minStack.push(8);
    minStack.push(3);
    minStack.push(9);
    minStack.push(3);
    minStack.push(7);
    expect(minStack.minStack.peek()).toEqual(3);
    expect(minStack.stack.peek()).toEqual(7);
    minStack.pop();
    expect(minStack.minStack.peek()).toEqual(3);
    expect(minStack.stack.peek()).toEqual(3);
    minStack.pop();
    expect(minStack.minStack.peek()).toEqual(3);
    expect(minStack.stack.peek()).toEqual(9);
    minStack.pop();
    expect(minStack.minStack.peek()).toEqual(3);
    expect(minStack.stack.peek()).toEqual(3);
    minStack.pop();
    minStack.pop();
    expect(minStack.minStack.peek()).toEqual(10);
    expect(minStack.stack.peek()).toEqual(17);
    expect(minStack.peek()).toEqual(minStack.stack.peek());
    minStack.clear();
    expect(minStack.isEmpty()).toEqual(true);
    expect(minStack.isEmpty()).toEqual(true);
    expect(() => {
      minStack.peek();
    }).toThrow();
    expect(() => {
      minStack.pop();
    }).toThrow();
  });
});
