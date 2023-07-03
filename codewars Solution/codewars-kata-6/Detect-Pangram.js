//https://www.codewars.com/kata/545cedaa9943f7fe7b000048 (link)


/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/




//================= 1 =======

// function isPangram(s){
//   let arr = []
//   s.toLowerCase().match(/[a-z]/g).filter((e) =>(!arr.includes(e) ? arr.push(e) : ""));
//   return arr.length === 26
// }



//====================== 2 =========

const isPangram = (s) => new Set(s.toLowerCase().match(/[a-z]/g)).size === 26;
