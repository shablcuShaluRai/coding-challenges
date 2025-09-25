export default class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(item) {
    this.items[this.count] = item;
    this.count++;
    return this.count;
  }

  pop() {
    if (this.count === 0) return undefined;
    this.count--;
    const deleteItem = this.items[this.count];
    delete this.items.splice(0, 1);
    // need to figure out how to fix this
    return deleteItem;
  }

  //length

  length() {
    return this.count;
  }

  //peek

  peek() {
    return this.items[this.count];
  }
}

const stack = new Stack();

stack.push(20);
stack.push(10);
stack.push(30);

console.log("stack.pop()", stack.pop());

console.log("stack after", stack);
