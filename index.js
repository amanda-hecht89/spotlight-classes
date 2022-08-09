class Stack {
  //attribute below
  #list;
  
  constructor(list) {
      this.#list = list || [];
    }
  }
  push(newItem) {
    this.#list.push(newItem);
  }
}

const Stack = new Stack(['fox', 'goose', 'lizard']);
console.log(stack);
Stack.describeClass();

class Queue {
    #list = [];
    constructor(queue) {
        if (queue) {
        this.#list = queue;
        }
    }
    enqueue(newItem) {}
}

module.exports = { Stack, Queue };
