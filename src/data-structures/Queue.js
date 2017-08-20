// @flow
export default class Queue {
  first: Node | null;
  last: Node | null;

  constructor() {
    this.first = null;
    this.last = null;
  }
  /**
   * Adds an element to the back of the queue
   * O(1)
   */
  add(value: any): void {
    // If list is empty
    if (!this.last) {
      this.first = new Node(value);
      this.last = this.first;
      // General case
    } else {
      const newLast = new Node(value);
      this.last.prev = newLast;
      this.last = newLast;
    }
  }

  /**
   * Removes the element from the first of the queue
   * O(1)
   */
  remove(): any {
    if (!this.first || !this.last) throw new Error('Cannot remove from an empty queue');
    const data = this.first.data;
    // If queue has only one element
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
      // General case
    } else {
      this.first = this.first.prev;
    }
    return data;
  }

  /**
   * Returns the value at the first of the queue
   * O(1)
   */
  peek(): any {
    if (!this.first || !this.last) throw new Error('Cannot peek from an empty queue');
    return this.first.data;
  }

  /**
   * Returns true if the queue is empty
   * O(1)
   */
  isEmpty(): boolean {
    return this.first === null;
  }

  /**
   *  Clears all contents in the queue
   *  O(1)
   */
  clear() {
    this.first = null;
    this.last = null;
  }
}

/**
 * @private
 */
class Node {
  prev: Node | null;
  data: any;

  constructor(data: any) {
    this.data = data;
    this.prev = null;
  }
}
