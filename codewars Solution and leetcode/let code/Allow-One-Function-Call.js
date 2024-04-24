// https://leetcode.com/problems/allow-one-function-call/ (link)


/*

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

*/



function once(fn) {
  let executionCount = 0;
  return function (...args) {
    if (executionCount > 0) return undefined;
    executionCount++;
    return fn(...args);
  };
}


let fn = (a, b, c) => a * b * c
 let  calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ];

(once(console.log(fn(calls[0]))))
(once(console.log(fn(calls[1]))))


