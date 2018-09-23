const Stack = require('./Stack');

class StackQueue {

  constructor() {
    this.storage1 = new Stack();
    this.storage2 = new Stack();
  }

  size() {
    return this.storage1.size() + this.storage2.size();
  }

  enqueue(item) {
    this.storage1.push(item);
  }

  dequeue() {

    if (this.storage2.size() === 0) {
      while (this.storage1.size() > 0) {
        this.storage2.push(this.storage1.pop());
      }
    }

    return this.storage2.pop();
  }
}

module.exports = StackQueue;