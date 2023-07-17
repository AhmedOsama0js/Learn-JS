//https://elzero.org/swap-cases-and-remove-nums-challenges/ (link)

/*
Introduction to the challenge
Inside the word convert the lowercase letter to uppercase letter and vice versa
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Make a parameter that accepts one, which is the String that will be dealt with
It is required to convert the lowercase letter to the capital letter and vice versa
It is forbidden to use any ready-made method such as swapcase in Python
If the result is a result of the output
*/

//=========================== 1 ========================

function swapping(word) {
  word = word
    .split("")
    .map((e) => (e == e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()))
    .join("");
  return word.match(/[a-zA-Z]/g).join("");
}

//=========================== 2 ========================

// function swapping(word) {
//   return word
//     .replace(/[a-zA-Z]/g, (char) =>
//       char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
//     )
//     .replace(/\d/g, "");
// }

// # Test Cases
console.log(swapping("HellO")); // hELLo
console.log(swapping("WOrld")); // woRLD
console.log(swapping("12ProGRAM12")); // pROgram
