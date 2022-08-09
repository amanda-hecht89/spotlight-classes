class Stack {
  //attribute below
  #list = [];
  constructor(stack) {
    if (stack) {
      this.#list = stack;
    }
  }
  push(newItem) {}
}

const Stack = new Stack(['fox', 'goose', 'lizard']);
console.log(stack);
Stack.describeClass();

class Queue {
    #list = [];
    constructor(initialList) {
        if (initialList) {
            this.#list = initialList;
        }
    }
    enqueue(item) {
        this.#list.push(item);
        
    }



}

module.exports = { Stack, Queue };
