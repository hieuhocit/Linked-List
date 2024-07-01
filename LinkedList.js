class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  // Private variables
  #head;
  #tail;
  #size;

  // Read-only variables
  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get size() {
    return this.#size;
  }

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    // If there is no node in the list, set the head and tail to newNode
    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      // If there is a node in the list, set the next node in the tail to newNode
      this.#tail.next = newNode;

      // Reassign the tail
      this.#tail = newNode; // (or this.#tail = this.#tail.next)
    }
    this.#size++;
  }

  // Add a new node to the start of the list
  prepend(data) {
    const newNode = new Node(data);

    // If there is no node in the list, set the head and tail to newNode
    if (this.#head === null) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      // If there is a node in the list, set the next node in the newNode to the head of the list
      newNode.next = this.#head;

      // Reassign the head
      this.#head = newNode;
    }
    this.#size++;
  }

  // Insert a new node at with the provided data at the given index
  insertAt(data, index) {
    if (!Number.isInteger(index)) return;
    if (index <= 1) return this.prepend(data);
    if (index >= this.#size + 1) return this.append(data);

    const newNode = new Node(data);

    let count = 1;
    let currentNode = this.#head;
    let prevNode = null;

    while (true) {
      if (count === index) {
        newNode.next = currentNode;
        prevNode.next = newNode;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }
    this.#size++;
  }

  // Return the node at the given index
  at(index) {
    if (this.#head === null || !Number.isInteger(index) || index < 1 || index > this.#size) return;

    if (index === 1) return this.#head;
    if (index === this.#size) return this.#tail;

    let count = 1;
    let currentNode = this.#head;
    while (index) {
      if (count === index) return currentNode;
      currentNode = currentNode.next;
      count++;
    }
  }

  // Remove the node at the end of the list
  pop() {
    if (this.#head === null) return;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    } else {
      let currentNode = this.#head;
      const lastNode = this.#tail;
      while (currentNode.next !== lastNode) currentNode = currentNode.next;
      currentNode.next = null;
      this.#tail = currentNode;
    }
    this.#size--;
  }

  // Remove the node at the start of the list
  shift() {
    if (this.#head === null) return;

    if (this.#head === this.#tail) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#head = this.#head.next;
    }
    this.#size--;
  }

  // Remove the node at the given index
  removeAt(index) {
    if (this.#head === null || !Number.isInteger(index) || index < 1 || index > this.#size) return;

    if (index === 1) return this.shift();
    if (index === this.#size) return this.pop();

    let count = 1;
    let currentNode = this.#head;
    let prevNode = null;
    while (true) {
      if (count === index) {
        prevNode.next = currentNode.next;
        break;
      }
      count++;
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    this.#size--;
  }

  // Return true if the passed in data is in the list and otherwise returns false
  contains(data) {
    let currentNode = this.#head;
    while (currentNode) {
      if (currentNode.data === data) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  // Return the index of the node containing the data, or null if not found
  find(data) {
    let index = 1;
    let currentNode = this.#head;
    while (currentNode) {
      if (currentNode.data === data) return index;
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }

  // Represents LinkedList objects as strings
  toString() {
    let tmp = this.#head;
    let string = '';
    while (tmp) {
      string += `(${tmp.data}) -> `;
      tmp = tmp.next;
    }
    return string + 'null';
  }
}

module.exports = { LinkedList };
