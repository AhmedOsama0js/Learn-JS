//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4 (link)

/*

Write a function that checks if a given string (case insensitive) is a palindrome. A palindrome is a word, number, phrase,
or other sequence of symbols that reads the same backwards as forwards, 
such as madam or racecar, the date and time 12/21/33 12:21, and the sentence: "A man, a plan, a canal – Panama".

*/

//Solution 1

// const isPalindrome = (x) =>
//   x.toLocaleLowerCase() === x.split("").reverse().join("").toLocaleLowerCase();

//Solution2

const isPalindrome = (x) => {
  let reverse = [];
  for (let i = x.split("").length - 1; i >= 0; i--) {
    reverse.push(x[i]);
  }
  return x.toLocaleLowerCase() == reverse.join("").toLocaleLowerCase();
};

console.log(isPalindrome("a")); //true
console.log(isPalindrome("aba")); //true
console.log(isPalindrome("Abba")); //true
console.log(isPalindrome("hello")); //false
