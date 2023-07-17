//https://elzero.org/programming-text-characters-location/ (link)

/*
Introduction to the challenge
Print the position number for each letter of the word given to you
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Every letter in the English language has a number from the first A number 1 to Z number 26
All you have to do is print the number for each letter of any word you use
There must be a space between each number and the other

*/

//============== 1 ======================

// function word_to_nums(word) {
//   const n = [];
//   for (let i = 1; i < word.length; i++) {
//     n.push(word.charCodeAt(i) - 96);
//   }
//   return n.join(" ");
// }

//============== 2 ======================

function word_to_nums(word) {
  let A = "abcdefghijklmnopqrstuvwxyz".split("");
  return word
    .split("")
    .map((e) => A.indexOf(e.toLowerCase()) + 1)
    .join(" ");
}

// Tests
console.log(word_to_nums("Elzero")); // "5 12 26 5 18 15"
