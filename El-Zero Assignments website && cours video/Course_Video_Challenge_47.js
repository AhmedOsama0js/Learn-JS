//https://elzero.org/javascript-2021-array-challenge/ (link)

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.reverse().slice(counter - true)); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.reverse().slice(true, counter).reverse()); // ["Elham", "Mazero"]

console.log(
  `${my[counter - true].slice(zero, counter - true)}${my[+true].slice(
    counter - true
  )}`
); // "Elzero"

console.log(
  `${my[+true][4]}${my[+true][counter + (counter - true)].toLocaleUpperCase()}`
); // "rO"
