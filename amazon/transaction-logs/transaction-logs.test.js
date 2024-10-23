'use strict';

const { processLogs, processLogsOneArray } = require('./transaction-logs');

describe ('HackerRank challenge to deteremine the users in an array whose number of transactions exceeds a given threshold', () => {
  it ('returns an array of user IDs as strings in ascending numeric order', () => {
    expect(processLogs(['88 99 200', '88 99 300', '99 32 100', ' 12 12 15'], 2)).toEqual(['88', '99']);
    expect(processLogsOneArray(['88 99 200', '88 99 300', '99 32 100', ' 12 12 15'], 2)).toEqual(['88', '99']);

  });
});
