const Queue = require('./entity/Queue');
const StackQueue = require('./entity/StackQueue');
const rotate = require('./utils/rotateQueue');

(() => {
  let queue = new Queue();

  for (let i = 9; i < 100; i+=10) {
    queue.enqueue(i);
  }

  console.log(queue);
  console.log(queue.size());
  let m = queue.dequeue();
  console.log(m);
  console.log(queue);

  let q = rotate(queue, 3);

  console.log(q);

  let sq = new StackQueue();
  sq.enqueue(15);
  sq.enqueue(16);
  sq.enqueue(26);
  sq.enqueue(36);
  sq.enqueue(46);
  sq.enqueue(56);
  sq.enqueue(66);
  sq.enqueue(76);
  sq.enqueue(86);

  console.log(sq);

  sq.dequeue();

  console.log(sq);

})();