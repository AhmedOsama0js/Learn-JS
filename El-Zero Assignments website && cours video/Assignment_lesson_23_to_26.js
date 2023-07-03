// https://elzero.org/javascript-bootcamp-assignments-lesson-from-023-to-026/  (link)

//assignment 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(1e5); // 100000
console.log(1e2 * 1e3); // 100000
console.log(1e6 / 10); // 100000
console.log(10 ** 5); // 100000
console.log(Number("100000")); // 100000
console.log(parseFloat("100000.0 ahmed")); // 100000
console.log(parseInt("100000.500 ahmed")); // 100000
console.log(Number("100000")); // 100000
console.log(+"100000"); // 100000
console.log(Math.round(100000)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.floor("100000.1")); // 100000
console.log(Math.ceil("99999.1")); // 100000
console.log(Math.trunc(100000.12345)); // 100000
console.log(Math.max(100000, 1, 2, 3, 4)); // 100000
console.log(Math.min(100000, 9999999, 52231598, 12838558, 544645984)); // 100000

//=======================================================================================================

//assignment 2

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//=======================================================================================================

//assignment 3

console.log(Number.MAX_SAFE_INTEGER.toFixed(0).length); // 16

//=======================================================================================================

//assignment 4

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

//=======================================================================================================

//assignment 5

let num = 10;

console.log(Number.isInteger(num) + 1); // 2

//=======================================================================================================

//assignment 6

let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Number(flt).toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10

//=======================================================================================================

//assignment 7

console.log(Math.floor(Math.random() * 4) + 1); // 0 || 1 || 2 || 3 || 4
