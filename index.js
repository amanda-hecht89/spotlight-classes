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

class Queue {
    #list = [];
    constructor(initialList) {
            this.#list = initialList;
    }
    enqueue(item) {
        this.push(item);
    }

    dequeue() {
        return this
    }

    get count() {
        return this.#list.length;
    }

    get next() {
        return this.#list[0];
    }



}

module.exports = { Stack, Queue };
