// First In First Out => FIFO
class Queue {
  constructor() {
    this.queue = [];
  }
  // add elements
  enqueue(element) {
    this.queue.push(element);
  }
  // remove the first element
  dequeue() {
    this.queue.shift();
  }
}

const friends = new Queue();
friends.enqueue("Karim");
friends.enqueue("Rahim");
friends.enqueue("Sakib");
friends.enqueue("Nakib");
friends.enqueue("Rakib");

console.log(friends.queue);
friends.dequeue();
console.log(friends.queue);
friends.dequeue();
console.log(friends.queue);
