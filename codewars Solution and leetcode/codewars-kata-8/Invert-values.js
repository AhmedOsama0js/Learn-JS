//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript (link)

/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
*/

invert = (array) => (array = array.map((x) => -x));

console.log(invert([1, -2, 3, -4, 5]));
