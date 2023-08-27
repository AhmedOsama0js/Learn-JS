//https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/javascript (link)

/*
Given an array of numbers, return the difference between the largest and smallest values.

For example:

[23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

[1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

*/

//============= 1 ===============

function betweenExtremes(numbers) {
  let maxNum = Math.max(...numbers);
  let minNum = Math.min(...numbers);
  return maxNum - minNum;
}
//============= 2 ===============

let betweenExtremes = (numbers) => Math.max(...numbers) - Math.min(...numbers);




console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
