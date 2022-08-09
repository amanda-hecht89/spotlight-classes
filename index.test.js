const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    //peek returns the first element on that list
    expect(stack.peek()).toEqual(1);
  });

  // add more tests here...
});
