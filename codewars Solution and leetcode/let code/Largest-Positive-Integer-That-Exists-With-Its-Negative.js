// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/description/?envType=daily-question&envId=2024-05-02

/*

Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.

*/

let nums1 = [-1, 2, -3, 3];
let nums2 = [-1, 10, 6, 7, -7, 1];
let nums3 = [-10, 8, 6, 7, -2, -3];




// solution 1
var findMaxK = function (nums) {
  nums = nums.sort((x,y) =>y - x)
  for (let i = 0; i < nums.length; i++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[i] + nums[y] === 0) {
      return nums[i]
      }
    }
  }
  return -1
 };
// Runtime: 60 ms



// solution 2
var findMaxK = function (nums) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === 0) {
      return nums[right];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return -1;
};
// Runtime: 69 ms


console.log(findClosestSimilar(nums1));
console.log(findClosestSimilar(nums2));
console.log(findClosestSimilar(nums3));