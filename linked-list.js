/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    if (!this.head) {
      this.head = val;
      this.tail = val;
    } else {
      this.tail.next = val;
      this.tail = val;
    }
    this.length === 0 ? (this.length = 1) : (this.length += 1);
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    if (!this.head) {
      this.push(val);
    } else {
      val.next = this.head;
      this.head = val;
      this.length += 1;
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    if (!currentNode) {
      return this;
    } else if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentNode;
    } else {
      while (currentNode) {
        if (currentNode.next === this.tail) {
          this.tail = currentNode
          return currentNode.next;
        }
        currentNode = currentNode.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    if (!currentNode) {
      return this;
    } else if (!currentNode.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return currentNode;
    } else {
      this.head = currentNode.next
      return currentNode;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
