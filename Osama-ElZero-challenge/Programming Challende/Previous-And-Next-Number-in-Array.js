//https://elzero.org/previous-and-next-number-in-array-challenge/ (link)

/*
Create a Function that accepts two Parameters
The first Parameter is the number
The second parameter is the Array
Check if the next and preceding number of the given number are in the array or not
For example, if the number is 10, check if the previous number 9 and the next number 11 are in the Array or not.
If the numbers are present in the Array, print True and then the numbers or False only if they are not present as in the example
*/

let arrayOfNumbers = [1, 2, 4, 10, 20, 12];

function check(num) {
  let numP = num + 1;
  let numN = num - 1;
  if (arrayOfNumbers.includes(numP) && arrayOfNumbers.includes(numN)) {
    return `true => ${numN} | ${num} | ${numP}`;
  } else {
    return `false`;
  }
}

console.log(check(11)); // True => "10 | 11 | 12"
console.log(check(3)); // True => "2 | 3 | 4"
console.log(check(5)); // False
