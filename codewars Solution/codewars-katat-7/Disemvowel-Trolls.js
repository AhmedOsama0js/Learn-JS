//https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript (link)

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/





//========== 1 ===========
// function disemvowel(str) {
//   let x = ["a", "e", "i", "o", "u"];
//   let newArr= str.split("").filter(function (ele) {return x.indexOf(ele.toLowerCase()) === -1;
//     }).join("");
//   return newArr
// }


//=========== 2 ============
disemvowel = (str) => str.replace(/[aeiou]/gi, "");

console.log(disemvowel("This website is for losers LOL!"));
