// https://leetcode.com/problems/filter-elements-from-array/description/ (link)


/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

*/



// Solution 1
var filter =  (arr, fn) =>  arr.map((e,i) => fn(e,i));
// Runtime 55 ms




// Solution 2
var filter = (arr, fn) => {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {fn(arr[i], i) ? filteredArr.push(arr[i]): null  }
  return filteredArr;
};
// Runtime 42 ms

