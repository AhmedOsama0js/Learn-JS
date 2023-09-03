// https://leetcode.com/problems/merge-sorted-array/description/ (link)

/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

var merge = function (num1, m, num2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    num1[i] = num2[j];
  }
  num1.sort((a, b) => a - b);
};

// xxx

// var merge = function (num1, m, num2, n) {
//   num1.slice(0, m).concat(num2.slice(0, n)).sort();
// };

// xxx

// var merge = function (nums1, m, nums2, n) {
//   for (let i = m, j = 0; j < n; i++, j++) {
//     nums1[i] = nums2[j];
//   }
//  return nums1.sort((a, b) => a - b);
// };

// xxx

// var merge = function (num1, m, num2, n) {
//   let s = Math.max(m, n)
//   let arr = []
//   for (let i = 0; i < s; i++){
//     if (i < m) arr.push(num1[i]);
//     if(i < n ) arr.push(num2[i])
//   }
//   return arr.sort();
// };

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
