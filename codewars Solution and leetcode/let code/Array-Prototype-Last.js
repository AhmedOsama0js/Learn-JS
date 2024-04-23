// https://leetcode.com/problems/array-prototype-last/description/ (link)

/*

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

*/

// solution 1  // Runtime: 51 ms

let A = [null, {}, 3];

Array.prototype.last = function () {
  return this.length <= 0 ? -1 : this.slice(this.length - 1)[0];
};

// solution 2  // Runtime: 57 ms

Array.prototype.last = function () {
  return this.length <= 0 ? -1 : this[this.length - 1];
};

console.log(A.last());
