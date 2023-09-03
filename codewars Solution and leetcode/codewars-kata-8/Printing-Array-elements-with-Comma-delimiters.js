// https://www.codewars.com/kata/56e2f59fb2ed128081001328 (link)

/*

Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

*/

// Solution 1

const printArray = (arr) => arr.join(",");

console.log(printArray(["h", "o", "l", "a"]));
