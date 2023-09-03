//https://www.codewars.com/kata/52efefcbcdf57161d4000091/ (link)



/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/


//=============  1 ==============

function count(string) {
  let obj = {};
  let s = string.split("")
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (s.lastIndexOf(s[i]) + 1) - (s.indexOf(s[i]));
  }
  return obj;
}

console.log(count("abaccc"));