// https://leetcode.com/problems/plus-one/description/ (link)

/*

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

*/

let digits0 = [4, 3, 2, 1];
let digits1 = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
let digits2 = [9];

// var plusOne = function (digits) {
//   digits[digits.length-1] = digits[digits.length-1] + 1
//   return digits.join("").split("")
// };
// // Runtime: 44 ms
function plusOne(digits) {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    if (sum < 10) {
      digits[i] = sum;
      return digits;
    } else {
      digits[i] = sum % 10;
      carry = 1;
    }
  }

  // If we are here, it means there's a carry left
  return [1, ...digits]; // Prepend 1 to the array
}
// Runtime: 44 ms

console.log(plusOne(digits0));
console.log(plusOne(digits1));
console.log(plusOne(digits2));
