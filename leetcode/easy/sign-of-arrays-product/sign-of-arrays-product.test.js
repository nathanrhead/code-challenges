'use strict';

const arraySign = require('./sign-of-arrays-product');

const testOne = [-1,-2,-3,-4,3,2,1]; // product = 144
const testTwo = [1,5,0,2,-3]; // product = -0
const testThree = [-1,1,-1,1,-1]; // producct = -1
const testFour = [1,28,-91,-62,-36,-1,-84,-90,-92,61,6,-58,-60,2,51,-15,-18,-81,87,84,100,-84,-13,-87,-33,72,-72,-59,-79,28,-69,-97,-93,17,67,11,-12,19,5,42,-85,71,-77,-82,26,-58,-51,-14,63,-85,-86,66,47,57,-86,-25,-75,59,-17,-71,89,-78,-42,30,39,61,-96,-30,-29,-92,-90,69,20,65,32,92,44,-71,-18,87,-86,23,-96,-21,-49,-96,-98,35,-11,-1,81,-48,68,5,75,57,-30,-7,32,86,-29,-86,-61,45,-31,-93,-26,-9,86,57,-52,75,68,-58,14,27,-94,47,-38,-44,75,-83,21,-83,43,62,74,97,78,43,54,28,64,-19,-89,88,68,18,-96,-83,-25,-71,88,-84,-24,-61,72,-90,-56,29,46,56,51,16,66,-2,65,-95,16,51,42,61,99,89,-93,59,-99,69,26,-61,21,41,40,-4,-49,3,-96,57,65,72,-41,-77,-4,61,71,-88,21,-95,38,64,92,0,-63]; // product = NaN
const testFive = [1, 0]; // product = 0

describe ('the arraySign function which, given the product of an array from a helper function, returns the sign of the product', () => {

  it ('returns 1 when the sign of the product of the array is positive', () => {
    expect(arraySign(testOne)).toEqual(1);
  });

  it ('returns -1 when the sign of the product of the array is negative', () => {
    expect(arraySign(testThree)).toEqual(-1);
  });

  it ('returns 0 when the product of the array is 0 or -0', () => {
    expect()
    expect(arraySign(testFive)).toEqual(0);
    expect(arraySign(testTwo)).toEqual(0);
  });

  it ('returns 0 when the product of the array is NaN', () => {
    expect(arraySign(testFour)).toEqual(0);
  });
})
