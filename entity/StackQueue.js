const Stack = require('./Stack');

class StackQueue {

  constructor() {
    this.storage = new Stack();
    this.temp = new Stack();
  }

  size() {
    return this.storage.size();
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    while (this.storage.size() !== 1) {
      this.temp.push(this.storage.pop());
    }

    this.storage.pop();

    while (this.temp.size() !== 0) {
      this.storage.push(this.temp.pop());
    }
  }
}

module.exports = StackQueue;