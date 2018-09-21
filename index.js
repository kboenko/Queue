const Queue = require('./entity/Queue');
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

})();