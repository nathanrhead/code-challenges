'use strict';

const { majorityElement, majorityElementEfficient } = require('./majority-element');

describe ('leetcode challenge to return the "majority element" of an array', () => {
  it ('returns the majority element of an array', () => {
    expect(majorityElement([3,2,3])).toEqual(3);
    expect(majorityElement([2,2,1,1,1,2,2])).toEqual(2);
    expect(majorityElement([3,3,4])).toEqual(3);

    expect(majorityElementEfficient([3,2,3])).toEqual(3);
    expect(majorityElementEfficient([2,2,1,1,1,2,2])).toEqual(2);
    expect(majorityElementEfficient([3,3,4])).toEqual(3);
  });
});
