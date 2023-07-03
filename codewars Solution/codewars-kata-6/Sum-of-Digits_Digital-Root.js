// https://www.codewars.com/kata/541c8630095125aba6000c00 (link)



/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

*/


function digitalRoot(n) {
  return Number(n.toString().split("").reduce((x, y) => +x + +y).toString().split("").reduce((x, y) => +x + +y).toString().split("").reduce((x, y) => +x + +y))}