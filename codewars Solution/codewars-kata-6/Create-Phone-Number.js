//https://www.codewars.com/kata/525f50e3b73515a6db000b83 (link)





/*

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.


*/



function createPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6)
    .join("")}`;
}
