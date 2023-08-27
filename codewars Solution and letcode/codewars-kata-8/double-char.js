//https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/

//the solution

// function doubleChar(str) {
//     return str.split("").map((s) => s.repeat(2)).join("")

// }

//Another Solution

function doubleChar(str) {
  var word = "";
  for (var i = 0; i < str.length; i++) {
    word = word = str[i] + str[i];
  }
  return word;
}

console.log(doubleChar("ahmed", "mohamed", "osama"));
