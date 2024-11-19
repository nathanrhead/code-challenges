'use strict';

const TimeMap = require('./time-based-key-value-store');

describe ('LeetCode challenge to create a time-based, key-value data store', () => {
  const timeMap = new TimeMap();
  timeMap.set('foo', 'bar', 1);
  timeMap.set('foo', 'bar2', 4);
  timeMap.set('love', 'high', 10);
  timeMap.set('love', 'low', 20);

  it ('returns the appropriate value based on the timestamp', () => {
    expect(timeMap.get('foo', 1)).toEqual('bar');
    expect(timeMap.get('foo', 4)).toEqual('bar2');
    expect(timeMap.get('love', 10)).toEqual('high');
    expect(timeMap.get('love', 20)).toEqual('low');
  });

  it ('returns the previous extant value for the key, if there is no value at the given timestamp', () => {
    expect(timeMap.get('foo', 5)).toEqual('bar2');
    expect(timeMap.get('foo', 5)).toEqual('bar2');
    expect(timeMap.get('love', 15)).toEqual('high');
    expect(timeMap.get('love', 25)).toEqual('low');
  });

  it ('returns an empty string when the key doesn\'t exist in the map or there is no value associated indirectly with the timestamp', () => {
      expect(timeMap.get('love', 5)).toEqual('');
      expect(timeMap.get('orange', 8)).toEqual('');
  });
});
