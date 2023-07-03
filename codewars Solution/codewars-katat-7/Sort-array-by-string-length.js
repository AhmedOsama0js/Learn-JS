//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript (link)

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

// function sortByLength (array) {
//   let arr =array.map((x) => x.length)
//   return arr.sort((a,b) => a- b)
// };

//================ 1 ===================

// function sortByLength(arr) {
//   return arr.sort(function (a, b) {
//     return a.length - b.length;
//   });
// }

//================ 2===================

sortByLength = (arr) => arr.sort((a, b) => a.length - b.length);



console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
