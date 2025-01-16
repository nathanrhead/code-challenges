'use strict';

const taskScheduler = require('./task-scheduler');

describe('leastInterval', () => {
  it ('returns the minimum number of intervals required to complete the tasks', () => {
    expect(taskScheduler(['A', 'A', 'A', 'B', 'B', 'B'], 2)).toBe(8);
    expect(taskScheduler(['A', 'A', 'A', 'B', 'B', 'B'], 0)).toBe(6);
    expect(taskScheduler(['A', 'A', 'A', 'B', 'B', 'B'], 1)).toBe(6);
    expect(taskScheduler(['A', 'A', 'A', 'B', 'B', 'B'], 50)).toBe(104);
  });
});