// https://elzero.org/javascript-2021-string-challenge/  (Link)

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.substring(13, 14).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ").slice(0, 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, 6) + " " + a.substr(length - 6)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  a.charAt(0).toLocaleLowerCase() +
    a.slice(1, length - 1).toUpperCase() +
    a.slice(length - 1)
); // eLZERO WEB SCHOOl
