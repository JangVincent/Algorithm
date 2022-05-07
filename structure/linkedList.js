class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined;
    this.prev = undefined;
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = undefined;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}
