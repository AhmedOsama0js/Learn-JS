// https://leetcode.com/problems/counter/description/  (link)

/*
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
*/

// solution 1

var createCounter = function (n) {
  let Count = n;
  return function () {
    return Count++;
  };
};

// Runtime: 49 ms

// solution 2

// var createCounter = function (n) {
//   n = n - 1;
//   let arr = [n];
//   return (counter = () => {
//     arr.push((n += 1));
//     return arr.slice(arr.length - 1)[0];
//   });
// };

// Runtime: 53 ms
