let cmds = require("fs").readFileSync("test.txt").toString().split("\n");
cmds.shift();

class Node {
  constructor(v) {
    this.value = v;
    this.prev = undefined;
    this.next = undefined;
  }
}

class Deque {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this._size = 0;
  }

  pushFront(v) {
    const newNode = new Node(v);
    if (this._size == 0) {
      this.head = this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this._size++;
  }

  pushBack(v) {
    const newNode = new Node(v);

    if (this.tail == undefined) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this._size++;
  }

  popFront() {
    if (this._size == 0) {
      return -1;
    } else {
      let v = undefined;
      if (this._size > 1) {
        this.head.next.prev = undefined;
        v = this.head.value;
        this.head = this.head.next;
      } else {
        v = this.head.value;
        this.tail = this.head = undefined;
      }

      this._size--;

      return v;
    }
  }

  popBack() {
    if (this._size == 0) {
      return -1;
    } else {
      let v = undefined;
      if (this._size > 1) {
        this.tail.prev.next = undefined;
        v = this.tail.value;
        this.tail = this.tail.prev;
      } else {
        v = this.tail.value;
        this.head = this.tail = undefined;
      }

      this._size--;

      return v;
    }
  }

  size() {
    return this._size;
  }

  empty() {
    return this._size == 0 ? 1 : 0;
  }

  front() {
    return this.head == undefined ? -1 : this.head.value;
  }

  back() {
    return this.tail == undefined ? -1 : this.tail.value;
  }
}

const d = new Deque();
let ans = [];

for (let i in cmds) {
  let cmd = cmds[i].trim();
  cmd = cmd.split(" ");

  switch (cmd[0]) {
    case "push_back":
      d.pushBack(cmd[1] * 1);
      break;
    case "push_front":
      d.pushFront(cmd[1] * 1);
      break;
    case "pop_front":
      ans.push(d.popFront());
      break;
    case "pop_back":
      ans.push(d.popBack());
      break;
    case "size":
      ans.push(d.size());
      break;
    case "empty":
      ans.push(d.empty());
      break;
    case "front":
      ans.push(d.front());
      break;
    case "back":
      ans.push(d.back());
      break;
  }
}

console.log(ans.join("\n"));
