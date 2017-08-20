// @flow
import Stack from '../data-structures/Stack';

/**
 * MinStack uses two stacks to keep track of values and mins
 */
export default class MinStack {
  stack = new Stack();
  minStack = new Stack();


/**
   * Pushes an element onto the top of the stack
   * O(1)
   */
  push(value: any): void {
    // If list is empty
    if (!this.stack.top) {
      this.stack.push(value);
      this.minStack.push(value);
      // General case
    } else {
      this.stack.push(value);
      if (value <= this.minStack.peek()) this.minStack.push(value);
    }
  }

  /**
   * Pops an element from the top of the stack
   * O(1)
   */
  pop(): any {
    if (!this.stack.top) throw new Error('Cannot pop from an empty stack');
    if (this.stack.peek() === this.minStack.peek()) this.minStack.pop();
    return this.stack.pop();
  }

  /**
   * Returns the value at the top of the stack
   * O(1)
   */
  peek(): any {
    if (!this.stack.top) throw new Error('Cannot peek from an empty stack');
    return this.stack.peek();
  }

  /**
   * Returns true if the stack is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.stack.isEmpty();
  }

  /**
   *  Clears all contents in the stack
   *  O(1)
   */
  clear() {
    this.stack.clear();
    this.minStack.clear();
  }
}
