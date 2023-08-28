//https://leetcode.com/problems/palindrome-number/ (link)

/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.
*/

var isPalindrome = function (x) {
  let n = +`${x}`.split("").reverse().join("");
  return n === x;
};

console.log(isPalindrome(121));
