//https://elzero.org/javascript-bootcamp-assignments-lesson-from-071-to-078/ (link)

//=================================================================================

//Assignment 1

//=================================================================================

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let string = mix.map(function (x) {
//   return isNaN(parseInt(x)) ? x : ""
// }).reduce(function (x, y) {
//   return x + y
// })

//========
//Short solution
//========

let string = mix
  .map((x) => (isNaN(parseInt(x)) ? x : ""))
  .reduce((x, y) => x + y);
console.log(string); // Elzero

//=================================================================================

//Assignment 2

//=================================================================================

let myString = "EElllzzzzzzzeroo";

// let newString = myString.split("").map(function (x , y , z) {
//   return y === z.indexOf(x) ? x : "";
// }).reduce(function (x, y) {
//   return x + y
// })

//========
//Short solution
//========

let newString = myString
  .split("")
  .map((x, y, z) => (y === z.indexOf(x) ? x : ""))
  .reduce((x, y) => x + y);

console.log(newString);
// Elzero

//=================================================================================

//Assignment 3

//=================================================================================

let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let newArray = myArray
// .reduce(function (a, b) {
//   return a + b;
// })
// .split("")
// .map(function (x) {
//   return x === "," ? "" : x;
// }).join("");

//========
//Short solution
//========

let newArray = myArray
  .reduce((x, y) => x + y)
  .split("")
  .map((x) => (x === "," ? "" : x))
  .join("");

// Elzero
console.log(newArray);

//=================================================================================

//Assignment 4

//=================================================================================

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let replasNum = numsAndStrings
  .filter(function (x) {
    return !isNaN(parseInt(x)) ? x : "";
  })
  .map(function (x) {
    return -x;
  });

//========
//Short solution
//========

// let replasNum = numsAndStrings
//   .filter((x) => (!isNaN(parseInt(x)) ? x : ""))
//   .map((x) => -x);

// [-1, -10, 10, 20, -5, -3]
console.log(replasNum);

//=================================================================================

//Assignment 5

//=================================================================================

let nums = [2, 12, 11, 5, 10, 1, 99];

// let calc = nums.reduce(function (x, y) {
//   return y % 2 === 0 ? y * x : y + x
// }, 1)
//========
//Short solution
//========
let calc = nums.reduce((x, y) => (y % 2 === 0 ? y * x : y + x), 1);
console.log(calc);
// 500
