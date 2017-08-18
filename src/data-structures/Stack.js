// @flow
/**
 *  A doubly linked list
 */
export default class Stack {
  top: Node | null;

  constructor() {
    this.top = null;
  }
  /**
   * Pushes an element onto the top of the stack
   * O(1)
   */
  push(value: any): void {
    // If list is empty
    if (!this.top) {
      this.top = new Node(value);
      // General case
    } else {
      const newTop = new Node(value);
      newTop.next = this.top;
      this.top = newTop;
    }
  }

  /**
   * Pops an element from the top of the stack
   * O(1)
   */
  pop(): any {
    if (!this.top) throw new Error('Cannot pop from an empty stack');
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  /**
   * Returns the value at the top of the stack
   * O(1)
   */
  peek(): any {
    if (!this.top) throw new Error('Cannot peek from an empty stack');
    return this.top.data;
  }

  /**
   * Returns true if the stack is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.top === null;
  }

  /**
   *  Clears all contents in the stack
   *  O(1)
   */
  clear() {
    this.top = null;
  }
}

/**
 * @private
 */
class Node {
  next: Node | null;
  data: any;

  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}
