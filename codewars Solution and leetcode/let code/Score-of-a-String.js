// https://leetcode.com/problems/score-of-a-string/description/ (link)

/*
You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
Return the score of s.
*/

// let s = "hello";
let s = "zaz";


// solution 1
var scoreOfString = function (s) {
  let a = 0;
  s = s.split("").map((e) => e.charCodeAt(0));
  for (let i = 0; i < s.length - 1; i++) {
    a += Math.abs(s[i] - s[i + 1]);
  }
  return a;
};
// Runtime 79 ms


// solution 2
var scoreOfString = function (s) {
  let a = 0;
  let prevCharCode = s.charCodeAt(0);
  
  for (let i = 1; i < s.length; i++) {
    let currentCharCode = s.charCodeAt(i);
    a += Math.abs(currentCharCode - prevCharCode);
    prevCharCode = currentCharCode;
  }
  
  return a;
};

// Runtime 59 ms


// solution 3
var scoreOfString = function (s) {
  var total = 0;
  for (var i = 0; i < s.length - 1; i++) {
    total += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0));
  }
  return total;
};

// Runtime 64 ms