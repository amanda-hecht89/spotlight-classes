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
    #list;
    constructor(list) {
        this.#list = list || [];
    }
    enqueue(item) {
        this.#list.push(item);
    }

    get count() {
        return this.#list.length;
    }

    get next() {
        return this.#list[0];
    }


module.exports = { Stack, Queue };
