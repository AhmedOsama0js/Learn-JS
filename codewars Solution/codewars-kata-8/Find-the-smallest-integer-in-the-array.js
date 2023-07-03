// https://www.codewars.com/kata/55a2d7ebe362935a210000b2 (link)

/*

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

*/

const findSmallestInt = (args) => args.reduce((x, y) => (x < y ? x : y));
console.log(findSmallestInt([34, -345, -1, 100]));
