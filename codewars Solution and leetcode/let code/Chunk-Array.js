//   (link)

/*
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.
*/

// solution 1
var chunk = function (arr, size) {
  let a = [];
  let b = [];
  let sNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sNum++;
    if (sNum <= size) {
      b.push(arr[i]);
    }
    if (b.length === size || i === arr.length - 1) {
      a.push(b);
      b = [];
      sNum = 0;
    }
  }
  return a;
};
// Runtime 54 ms

// solution 2
var chunk = function (arr, size) {
  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    b.push(arr[i]);
    if (b.length === size || i === arr.length - 1) {
      a.push(b);
      b = [];
    }
  }
  return a;
};

// Runtime 69 ms

// solution 3
var chunk = function (arr, size) {
  let a = [];
  let b = [];
  arr.forEach((e, i) => {
    b.push(arr[i]);
    if (b.length === size || i === arr.length - 1) {
      a.push(b);
      b = [];
    }
  });
  return a;
};

// Runtime 54 ms

let arr = [1, 9, 6, 3, 2],
  size = 2;

console.log(chunk(arr, size));
 let a = {"A":1,"B": 2}
 let b = {"A":1,"B": 3}

