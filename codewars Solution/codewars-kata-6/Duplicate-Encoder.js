//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c (link)



/*

The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

*/



function duplicateEncode(word) {
  word = word.toUpperCase().split("");
  tst = {};
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    tst[word[i]] = tst[word[i]] ? tst[word[i]] + 1 : 1;
  }
  for (let i = 0; i < word.length; i++) {
    tst[word[i]] > 1 ? arr.push(")") : arr.push("(");
  }
  return arr.join("");
}