// https://www.codewars.com/kata/57f780909f7e8e3183000078

/*

Given a non - empty array of integers, return the result of multiplying the values together in order.Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

*/

//Solution 1

// const grow = (x) => {
//   let z = 1;
//   for (let i = 0; i < x.length; i++) {
//     z *= x[i];
//   }
//   return z
// };

//Solution  2

const grow = (x) => x.reduce((x, y) => x * y);

console.log(grow([1, 2, 3, 4]));
