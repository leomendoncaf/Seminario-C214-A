const Stack = require('./Stack');

const { expect } = require('chai');



describe('Stack', () => {
  it('should push elements to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.size()).to.equal(1);
    expect(stack.peek()).to.equal(1);
  });

  it('should pop elements from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    const popped = stack.pop();
    expect(popped).to.equal(1);
    expect(stack.size()).to.equal(0);
  });

  it('should return the correct size of the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).to.equal(3);
  });

  it('should return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).to.be.true;
  });

  it('should return null when peeking an empty stack', () => {
    const stack = new Stack();
    expect(stack.peek()).to.be.null;
  });
});