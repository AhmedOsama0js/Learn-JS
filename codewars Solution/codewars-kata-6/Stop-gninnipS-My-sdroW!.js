//  https://www.codewars.com/kata/5264d2b162488dc400000001 (link)


/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/


//==================== 1 =========



// function spinWords(string) {
//   string = string.split(" ");
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].split("").length >= 5) {
//       string[i] = string[i].split("").reverse().join("");
//     } else {
//       string[i];
//     }
//   }
//   return string.join(" ");
// }



//================== 2 ===========


function spinWords(string) {
  return string.split(" ").map((e) => e.split("").length >= 5 ? e = e.split("").reverse().join(""): e).join(" ")
  } 