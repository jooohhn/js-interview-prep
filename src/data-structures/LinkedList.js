// @flow
/**
 *  A doubly linked list
 */
export default class LinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * Adds an element to the head of the list. Cases are if the list
   * is empty, has one elements, or general case
   * O(1)
   */
  addFirst(value: any) {
    // If list is empty
    if (!this.head) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      // General case
    } else {
      const newHead = new Node(value);
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
  }

  /**
   * O(1)
   */
  addLast(value: any) {
    // If list is empty
    if (!this.tail) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      // General case
    } else {
      const newTail = new Node(value);
      this.tail.next = newTail;
      newTail.prev = this.tail;
      this.tail = newTail;
    }
  }

  /**
   * Returns the value at the index or false if it doesn't exist
   * O(n)
   */
  getFirst(): any {
    if (!this.head) throw new Error('LinkedList is empty');
    return this.head.data;
  }

  /**
   * Returns the value at the index or false if it doesn't exist
   * O(n)
   */
  getLast(): any {
    if (!this.tail) throw new Error('LinkedList is empty');
    return this.tail.data;
  }

  /**
   *  Returns true if value was in linked list, false if not
   *  O(n)
   */
  delete(value: any): boolean {
    if (!this.head) return false;
    if (this.head === this.tail && this.head.data === value) {
      this.clear();
      return true;
    }

    let currentHead = this.head;
    while (currentHead) {
      if (currentHead.data === value) {
        if (currentHead === this.head) {
          currentHead.next.prev = null;
          this.head = currentHead.next;
        } else if (currentHead === this.tail) {
          currentHead.prev.next = null;
          this.tail = currentHead.prev;
        } else {
          currentHead.prev.next = currentHead.next;
          currentHead.next.prev = currentHead.prev;
        }
        return true;
      }
      currentHead = currentHead.next;
    }

    return false;
  }

  /**
   *  Clears all contents in the linked list
   *  O(1)
   */
  clear() {
    this.head = null;
    this.tail = null;
  }
}

class Node {
  next: Node | null;
  prev: Node | null;
  data: any;

  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
