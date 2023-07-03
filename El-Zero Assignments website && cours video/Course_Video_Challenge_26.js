//    https://elzero.org/javascript-2021-number-challenge/  (link)

/*
  Number Challenge
*/
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Number(Math.min(a, b, c, d)).toFixed(0));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.floor(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Number(Math.floor(d)));
console.log(parseInt(d));
console.log(Number(d).toFixed(0));
console.log(Number(Math.trunc(d)));

// Use Variables b + d To Get This Valus
console.log(Number(Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Number(Math.ceil(b) / Math.ceil(d)).toFixed(2)); // 67 => Number
