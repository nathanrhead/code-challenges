# Leetcode: Challenge 1822: Sign of the Product of an Array | 26 June 2021 | Rating: Easy

## Task

There is a `function signFunc(x)` that returns:

- 1 if x is positive.
- -1 if x is negative.
- 0 if x is equal to 0.

You are given an integer array `nums`. Let `product` be the product of all values in the array `nums`.

Return `signFunc(product)`.

## Constraints

- 1 <= nums.length <= 1000
- -100 <= nums[i] <= 100

## Example 1

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

## Example 2

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

## Example 3

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

## Notes

The code here is straightforward and the real challenge is in handling -0, NaN, and Infinity, which is solved by ordering the if-statements such that's not positive or negative returns 0.

## Big 0

- Space = O(1) because reduce returns a discrete value, not an array.
- Time = O(n) because of the use of reduce. This solution is only 6.63% faster than all other leetcode submissions.j

The following solution passed using less time than 82.48% and less space than 50.44% of solutions on leetcode:

```javascript
var arraySign = function(nums) {
    let countNegative = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            countNegative++;
        } else if (nums[i] === 0) {
            return 0;
        }
    }
    if (countNegative % 2 === 0){
        return 1;
    } else {
        return -1;
    }
};
```
