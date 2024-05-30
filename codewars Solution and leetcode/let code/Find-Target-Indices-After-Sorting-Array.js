//https://leetcode.com/problems/find-target-indices-after-sorting-array/description/ (link)

/*

You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

*/

let nums = [1, 2, 5, 2, 3],
  target = 2;

let nums1 = [1, 2, 5, 2, 3],
  target1 = 3;

let nums2 = [1, 2, 5, 2, 3],
  target2 = 5;

var targetIndices = function (nums, target) {
  let arr = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr.push(i);
    } else if (nums[i] > target) {
      break;
    }
  }
  return arr;
};
//Runtime 44 ms

console.log(targetIndices(nums, target));
console.log(targetIndices(nums1, target1));
console.log(targetIndices(nums2, target2));
