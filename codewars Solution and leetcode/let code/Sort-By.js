// // https://leetcode.com/problems/sort-by/description/ (link)

// /*

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

// */

let arr1 = [5, 4, 1, 2, 3],
  fn1 = (x) => x;
let arr2 = [{ x: 1 }, { x: 0 }, { x: -1 }],
  fn2 = (d) => d.x;
let arr3 = [
    [3, 4],
    [5, 2],
    [10, 1],
  ],
  fn3 = (x) => x[1];

//  solution 1
var sortBy = (arr, fn) => arr.sort((x, y) => fn(x) - fn(y));
// Runtime 128 ms

//  solution 2
var sortBy =  (arr, fn) => arr.map((item) => item).toSorted((a, b) => fn(a) - fn(b));
// Runtime 104 ms

console.log(sortBy(arr1, fn1));
console.log(sortBy(arr2, fn2));
console.log(sortBy(arr3, fn3));

