
//https://leetcode.com/problems/contains-duplicate/description/(link)

/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
//===================  1   ===============

// var containsDuplicate = function (nums) {
//   nums = nums.sort()
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] == nums[i]) {
//      return true
//     }
//   }
//   return false
// };



// =============== 2 ==================
// var containsDuplicate = function (nums) {
//   return nums.length == [...new Set(nums)].length 
// };

var containsDuplicate = (nums) => nums.length != [...new Set(nums)].length; 


console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([2, 14, 18, 22, 22]));