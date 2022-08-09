const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    //peek returns the first element on that list
    expect(stack.peek()).toEqual(1);
  });

  // add more tests here...
});

describe("Queue Class", () => {
  it("#enqueue should add an item to the back", () => {
    const queue = new Queue();
    queue.enqueue("fox");
    queue.enqueue("goose");
    expect(queue.count).toBe(2);
    expect(queue.next).toBe("fox");
  });
});