// https://leetcode.com/problems/array-wrapper/description/ (link)

/*
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/

let nums = [
    [1, 2],
    [3, 4],
  ],
  operation = "Add";

// // solution 1
// class ArrayWrapper {
//   constructor(nums) {
//     this.nums = nums;
//   }

//   valueOf() {
//     return this.nums.reduce((acc, curr) => acc + curr, 0);
//   }

//   toString() {
//     return `[${this.nums.toString()}]`;
//   }
// }
// // Runtime 51 m

// solution 2
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((x, y) => x + y, 0);
};

ArrayWrapper.prototype.toString = function () {
  return `[${this.nums.toString()}]`;
};

// Runtime 49 ms
