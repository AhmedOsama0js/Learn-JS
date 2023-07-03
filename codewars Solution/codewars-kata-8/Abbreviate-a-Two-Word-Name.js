//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3 (link)

/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

//=================== solution 1 ==================

// function abbrevName(name) {
//   let arr = name.split(" ")
//   return `${arr[0].slice(0, 1).toUpperCase()}.${arr[1].slice(0, 1).toUpperCase()}`
// }

//=================== solution 2 ==================

const abbrevName = (name) =>
  name
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase())
    .join(".");

console.log(abbrevName("ahmed osama "));
