// https://leetcode.com/problems/is-object-empty/description/ (link)

/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/
let obj1 = { x: 5, y: 42 };
let obj2 = {};
let obj3 = [null, false, 0];

// -----------------------------  solution 1
var isEmpty = function (obj) {
  let a = [];
  for (const key in obj) {
    a.push(obj[key]);
  }
  return !a.length;
};
// Runtime: 54 ms

// ------------------- ---------- solution 2

// function isEmpty(obj) {
//   return !Object.keys(obj).length;
// }
// Runtime: 45 ms

const isEmpty=(obj) => !Object.keys(obj).length;
// Runtime: 52 ms

console.log(isEmpty(obj1));
console.log(isEmpty(obj2));
console.log(isEmpty(obj3));
