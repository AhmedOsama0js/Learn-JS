//https://www.codewars.com/kata/5583090cbe83f4fd8c000051 (link)

/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]

*/

const digitize = (n) => String(n).split("").map(parseFloat).reverse();

console.log(digitize(35231));
