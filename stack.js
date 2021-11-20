// Stack - Last In First Out (LIFO)
class Stack {
  constructor() {
    this.stack = [];
  }
  // push method
  add(element) {
    this.stack.push(element);
  }
  // pop method
  remove() {
    return this.stack.pop();
  }
}

// creating an object
const plates = new Stack();

// add elements to the stack
plates.add("Red");
plates.add("Green");
plates.add("Blue");
plates.add("Orange");
plates.add("Yellow");

// print current stack
console.log(plates.stack);

// remove element and print
plates.remove();
console.log(plates.stack);
plates.remove();
console.log(plates.stack);
