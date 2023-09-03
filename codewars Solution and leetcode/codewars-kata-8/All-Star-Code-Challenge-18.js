//https://www.codewars.com/kata/5865918c6b569962950002a1 (link)

/*
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.
*/

//==============  1 ======================

// const strCount = (str, letter) =>  str.split("").filter((e) => e == letter).length

//=============  2   =====================

const strCount = (str, letter) => str.split(letter).length - 1;

console.log(strCount("Hello", "o")); //==>  1
console.log(strCount("Hello", "l")); // ==>  2
console.log(strCount("", "z")); //  ==>  0
