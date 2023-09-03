//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/ (link);

/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

*/

var numberOfSteps = function (num) {
  let count = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num--;
      count++;
    }
    console.log(num);
  }
  return count;
};

console.log(numberOfSteps());
