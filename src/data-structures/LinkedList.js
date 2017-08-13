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
    if (!this.head && !this.tail) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      // If list has one element
    } else if (this.tail === this.head) {
      if (!this.tail) { throw new Error("Since list has one element, tail shouldn't be null"); }
      const newHead = new Node(value);
      newHead.next = this.tail;
      this.tail.prev = newHead;
      this.head = newHead;
      // General case
    } else {
      if (!this.head) throw new Error("List isn't empty, head should exist");
      const newHead = new Node(value);
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
  }

  /**
   * O(1)
   */
  addLast(value: any) {
    // If list is empty
    if (!this.head && !this.tail) {
      const node = new Node(value);
      this.head = node;
      this.tail = node;
      // If list has one element
    } else if (this.tail === this.head) {
      if (!this.head) { throw new Error("Since list has one element, head shouldn't be null"); }
      const newTail = new Node(value);
      newTail.prev = this.head;
      this.head.next = newTail;
      this.tail = newTail;
      // General case
    } else {
      if (!this.tail) throw new Error("List isn't empty, tail should exist");
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
  get(index: number): any | false {
    let iterator = 0;
    let currentNode = this.head;
    while (iterator !== index) {
      if (!currentNode) return false;
      currentNode = currentNode.next;
      iterator++;
    }
    return currentNode ? currentNode.data : false;
  }

  /**
   *  Returns true if value was in linked list, false if not
   *  O(n)
   */
  delete(index: number): boolean {
    let iterator = 0;
    let currentNode = this.head;

    while (iterator !== index) {
      if (currentNode === null) {
        return false;
      }
      currentNode = currentNode.next;
      iterator++;
    }

    if (!currentNode) {
      return false;
    }

    if (currentNode === this.head && currentNode === this.tail) {
      this.clear();
    } else if (currentNode === this.head) {
      if (!currentNode.next) {
        throw new Error(
          'There should always be data after head if LinkedList size > 1'
        );
      }
      const newHead = currentNode.next;
      newHead.prev = null;
      this.head = newHead;
    } else if (currentNode === this.tail) {
      if (!currentNode.prev) {
        throw new Error(
          'There should always be data before tail if LinkedList size > 1'
        );
      }
      const newTail = currentNode.prev;
      newTail.next = null;
      this.tail = newTail;
    } else {
      if (!currentNode.prev || !currentNode.next) {
        throw new Error(
          'Case of general node should always yield existing prev and next'
        );
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }

    return true;
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
