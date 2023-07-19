//https://elzero.org/numbers-from-variables-challenges/ (link)

/*
1-Returns the smallest number in the values ​​in the variables as an integer.
2-Use the variables a + d only once to get the desired result
3-Retrieve the number 2 of variable d in four different ways
4-Use the variables b + d to return the required value as in the code with the same type as required next to the value
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

//=================  1   =================

let smallNum = `${a} ${b} ${c} ${d}`.split(" ");
console.log(Math.floor(smallNum.sort((a, b) => a - b)[0])); // 2
console.log("#".repeat(20));

//=================  2   =================

// Use Variables a + d One Time To Get The Needed Output
console.log((a + Math.floor(b) * Math.floor(d) * Math.floor(d) + c) * c); // 10000

console.log("#".repeat(20));

//=================  3   =================

//  == 1
console.log(Math.floor(d)); // سيتم طباعة 2
//  == 2
console.log(Array.from(String(d), Number)[0]); // سيتم طباعة 2
//  == 3
console.log(Number.parseInt(String(d).charAt(0))); // سيتم طباعة 2
//  == 4
console.log(Number(d.toString()[0])); // سيتم طباعة 2

//=================  4  =================

// Use Variables b + d To Get This Valus
console.log(((b + d) / Math.ceil(d) - 1).toFixed(2)); // 66.67 => String
console.log(Math.floor((b + d) / Math.ceil(d))); // 67 => Number
