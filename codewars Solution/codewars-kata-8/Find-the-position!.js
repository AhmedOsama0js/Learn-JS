//https://www.codewars.com/kata/5808e2006b65bff35500008f (link)

/*

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

//Solution 1

const position = (letter) => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${
    alpha.toLocaleLowerCase().indexOf(letter) + 1
  }`;
};
