class Stack {

  constructor() {
    this.storage = [];
  }

  size() {
    return this.storage.length;
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    let last = this.storage[this.storage.length - 1];
    this.storage.pop();
    return last;
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

}

module.exports = Stack;