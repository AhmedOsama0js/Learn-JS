//https://www.codewars.com/kata/5715eaedb436cf5606000381 (link)

/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

//======================== solution 1 ==================

// function positiveSum(arr) {
//   let na = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = ''
//     } else {
//       na += arr[i]
//     }
//   }
//   return na
// }

//======================== solution 2 ==================

// const positiveSum = (arr) => arr.reduce((x, y) => {
//   if (y > 0) {
//     y = y
//   } else {
//     y = 0
//   }
//   return x + y
// });

//======================== solution 3 ==================

const positiveSum = (arr) => arr.reduce((x, y) => x + (y < 0 ? (y = 0) : y));

console.log(positiveSum([1, -2, 3, 4, 5]));
