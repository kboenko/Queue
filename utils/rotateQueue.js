module.exports = (queue, num) => {

  let q = queue;
  let count = 0;

  while(q.size() - count !== num) {
    q.enqueue(q.dequeue());
    count++;
  }

  return q;

};