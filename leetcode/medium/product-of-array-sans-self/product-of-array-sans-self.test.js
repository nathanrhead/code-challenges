'use strict';

const { productExceptSelf, productExceptSelfUsingDivision } = require('./product-of-array-sans-self');

describe ('LeetCode challenge to return an array representing the product of the input array sans the value at i', () => {
  it ('returns an array of products based on an input array', () => {
    // expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    // expect(productExceptSelf([5, 10, 2])).toEqual([20, 10, 50]);

    // expect(productExceptSelfUsingDivision([1,2,3,4])).toEqual([24,12,8,6]);
    // expect(productExceptSelfUsingDivision([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    // expect(productExceptSelfUsingDivision([5, 10, 2])).toEqual([20, 10, 50]);
  });
});
