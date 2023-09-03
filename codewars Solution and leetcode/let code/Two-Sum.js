//https://leetcode.com/problems/two-sum/solutions/3304857/two-sum/ (link)

/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      const otherIndex = map.get(complement);

      if (otherIndex !== i) {
        return [i, otherIndex];
      }
    }
  }

  return [];
}

console.log(twoSum([3, 3], 6));
