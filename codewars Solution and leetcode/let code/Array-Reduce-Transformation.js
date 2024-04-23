// https://leetcode.com/problems/array-reduce-transformation/description/ (link)

/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

*/


// solution 1
const reduce = function (nums, fn, init) {
  let result = init;
  for (let i = 0; i < nums.length; i++){
    result = fn(result, nums[i]); 
    console.log(result);
  }
  return result; 
};
// Runtime: 63 ms




// solution 2
const reduce1 = function (nums, fn, init) {
  return nums.reduce(fn, init);
};
// Runtime: 52 ms