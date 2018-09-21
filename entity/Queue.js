class Queue {

  constructor() {
    this.storage = [];
  }

  size() {
    return this.storage.length;
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    let first = this.storage[0];
    this.storage.shift();
    return first;
  }

}

module.exports = Queue;