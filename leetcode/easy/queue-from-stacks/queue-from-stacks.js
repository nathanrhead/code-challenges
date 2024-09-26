/** 
 * Your MyQueue object will be instantiated and called as follows:
 * const obj = new MyQueue();
 * obj.push(x);
 * const param_2 = obj.pop();
 * const param_3 = obj.peek();
 * const param_4 = obj.empty();
 */

class MyQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  push(x) {
    // If values are in stack two, reverse it by emptying its values into stack one to set the correct order (which was reversed during a dequeue).
    while (this.stackTwo.length) { this.stackOne.push(this.stackTwo.pop()); };

    // Push the passed value onto the end of the queue.
    return this.stackOne.push(x);
  };

  pop() {
    // Return null if there are no values in either stack.
    if (this.stackOne.length <= 0 && this.stackTwo.length <= 0) return null;
    
    // Reverse the stack to return the first value in the queue when the last value of the stack is popped off.
    while (this.stackOne.length) { this.stackTwo.push(this.stackOne.pop()); };

    return this.stackTwo.pop();
  };

  peek() {
    return this.stackOne.length <= 0 && this.stackTwo.length <= 0 ? null : this.stackOne.length > 0 ? this.stackOne[0] : this.stackTwo[this.stackTwo.length - 1];
  };

  isEmpty() {
    return this.stackOne.length === 0 && this.stackTwo.length === 0;
  };
};

module.exports = MyQueue;
