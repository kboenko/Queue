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

    if (this.temp.size() === 0) {
      while (this.storage.size() > 0) {
        this.temp.push(this.storage.pop());
      }
    }

    return this.temp.pop();
  }
}

module.exports = StackQueue;