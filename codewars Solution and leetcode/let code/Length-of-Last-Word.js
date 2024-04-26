// https://leetcode.com/problems/length-of-last-word/description/ (link)

/*

Given a string consisting of words and spaces, return the length of the last word in the string.s

A word is a maximal 
substring
 consisting of non-space characters only.

*/


// solution 1
var lengthOfLastWord = function (s) {
  s = s.split(" ").filter((e) => e != "");
  return s[s.length - 1].length;
};
// Runtime 50 ms;

// solution 2
var lengthOfLastWord = function (s) {
  s = s.trim().split(" ");
  return s[s.length - 1].length;
};
// Runtime: 43 ms

// solution 3
var lengthOfLastWord = (s) => (s = s.trim().split(" ").pop().length);
// Runtime: 56 ms


