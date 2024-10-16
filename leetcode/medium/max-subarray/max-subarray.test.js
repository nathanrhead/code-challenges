'use strict';

const { maxSubArray, maxSubArrayDandQ } = require('./max-subarray');

describe ('leetcode challenge to return the max subarray', () => {
  it ('returns the max subarray', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    expect(maxSubArray([1])).toEqual(1);
    expect(maxSubArray([-1])).toEqual(-1);
    expect(maxSubArray([5,4,-1,7,8])).toEqual(23);
    expect(maxSubArray([-1,-2,-3])).toEqual(-1);

    expect(maxSubArrayDandQ([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    expect(maxSubArrayDandQ([1])).toEqual(1);
    expect(maxSubArrayDandQ([-1])).toEqual(-1);
    expect(maxSubArrayDandQ([5,4,-1,7,8])).toEqual(23);
    expect(maxSubArrayDandQ([-1,-2,-3])).toEqual(-1);
  });
});
