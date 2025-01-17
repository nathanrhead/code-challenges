'use strict';

const lruCache = require('./lru-cache.js');

describe('lruCache', () => {
  it ('should return [null, null, null, 1, null, -1, null, -1, 3, 4]', () => {
    const lru = new lruCache(2);
    lru.put(1, 1);
    lru.put(2, 2);
    expect(lru.get(1)).toBe(1);
    lru.put(3, 3);
    expect(lru.get(2)).toBe(-1);
    lru.put(4, 4);
    expect(lru.get(1)).toBe(-1);
    expect(lru.get(3)).toBe(3);
    expect(lru.get(4)).toBe(4);
  });
});
