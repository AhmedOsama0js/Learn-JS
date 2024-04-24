// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/ (link)

/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

*/



// solution 1
var map = function (arr, fn) {
  let nArr = []
  for (let i = 0; i < arr.length; i++) {
    nArr[i] =fn(arr[i]);
  }
  return nArr
};
// Runtime: 46 ms




// solution 2
var map = (arr, fn) => arr.map((e, i) => fn(e, i))
// Runtime: 49 ms


