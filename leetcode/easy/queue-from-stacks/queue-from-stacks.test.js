'use strict';

const Queue = require('./queue-from-stacks');

describe ('leetcode challenge to build a queue from a stack', () => {
  it ('returns true when a string is a palindrome', () => {
    const queue = new Queue();
    queue.push(1);
    queue.push(2);

    expect(queue.peek()).toEqual(1);
    expect(queue.pop()).toEqual(1);
    expect(queue.isEmpty()).toBeFalsy();
  });
});
