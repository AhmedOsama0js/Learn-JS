//https://elzero.org/array-methods-challenge/ (link)

/*
Write the appropriate code to be able to implement what is required of you using the JavaScript language
It is not allowed to use numbers at all and you can use the values ​​of the available variables only
You are only allowed to edit the “????” And nothing else
Write the appropriate code and use the values ​​of the variables and everything you learned to be able to implement the required
Each request has the desired Output next to it
*/



let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my.pop();
my.pop();
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
console.log(my.slice(true, counter)); // ["Elham", "Mazero"]
console.log(
  my[zero + true].slice(zero, counter - true) +
    my[counter - true].slice(counter - true)
); // "Elzero"
console.log(
  my[counter - true].slice(counter + true, counter + counter - true) +
    my[counter - true]
      .slice(counter + counter - true, counter + counter)
      .toUpperCase()
); // "rO"
