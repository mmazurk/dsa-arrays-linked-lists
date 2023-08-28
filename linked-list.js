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

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
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
          this.tail = currentNode;
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
      this.head = currentNode.next;
      return currentNode;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    let num = 0;
    if (!currentNode) {
      return undefined;
    } else {
      while (currentNode) {
        if (num === idx) {
          return currentNode.val;
        }
        num++;
        currentNode = currentNode.next;
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  // Node1 -> Node2 -> Node3 -> Node4

  setAt(idx, val) {
    let newNode = new Node(val);

    if (this.length === 0 && idx === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return this;
    } else if (idx > this.length - 1) {
      throw new Error("Out of range");
    } else if (idx === 0) {
      newNode.next = this.head.next
      this.head = newNode;
      return this;
    } else {
      let currentNode = this.head;
      let num = 0;
      while (currentNode) {
        if (num === idx - 1 && currentNode.next !== this.tail) {
          newNode.next = currentNode.next.next;
          currentNode.next = newNode;
        } else if (num === idx - 1 && currentNode.next === this.tail) {
          this.tail = newNode;
          currentNode.next = newNode;
        }
        num++;
        currentNode = currentNode.next;
      }
    }
    return this;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {
    let currentNode = this.head;
    if (!currentNode) {
      throw Error("No numbers to average");
    }
    let total = 0;
    while (currentNode) {
      if (typeof currentNode.val !== "number") {
        throw Error("One value is not a number");
      } else {
        total += currentNode.val;
      }
      currentNode = currentNode.next;
    }       
    return `The average is ${total / this.length}`;
  }
}

module.exports = LinkedList;

// let node1 = new Node("first");
// let node2 = new Node("second");
// let node3 = new Node("third");
// let node4 = new Node("fourth");
// let myLL = new LinkedList();
// myLL.push(node1)
// myLL.push(node2)
// myLL.push(node3)
// myLL.push(node4)

// let emptyLL = new LinkedList();

// let node1 = new Node(1)
// let node2 = new Node(2)
// let node3 = new Node(3)
// let node4 = new Node(4)
// let node5 = new Node(5)
// let myLL = new LinkedList([node1])
// myLL.average()
