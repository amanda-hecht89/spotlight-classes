const { Stack, Queue } = require('./index.js');
describe('Stack Class', () => {
  it('#push should add a new item to the stack ', () => {
    const stack = new Stack();
    stack.push(1);
    //peek returns the first element on that list
    expect(stack.peek()).toEqual(1);
  });

  it('#peek should return the top item on the stack', () => {
    const stack = new Stack();
    stack.push([1, 2]);
    stack.push([2, 3]);
    expect(stack.peek()).toEqual([2, 3]);
  });

  it('#pop should remove the top item on the stack', () => {
    const stack = new Stack();
    stack.push('fox');
    stack.push('goose');
    stack.push('lizard');
    const item = stack.pop();
    expect(item).toEqual('lizard');
    expect(stack.count).toBe(2);
  });

  describe('Queue Class', () => {
    it('#enqueue should add an item to the back', () => {
      const queue = new Queue();
      queue.enqueue('fox');
      queue.enqueue('goose');
      expect(queue.count).toBe(2);
      expect(queue.next).toBe('fox');
    });
  });
  // add more tests here...
});
