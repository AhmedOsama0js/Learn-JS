// https://elzero.org/javascript-bootcamp-assignments-lesson-from-040-to-047/ (link)

//=======================================================================

//Assignment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
let length1 = myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//=======================================================================

//Assignment 2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

let length2 = friends.pop();
let index0 = friends.shift();

console.log(friends); // ["Eman", "Osama"]

//=======================================================================

//Assignment 3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne, arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//=======================================================================

//Assignment 4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

//=======================================================================

//Assignment 5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (haystack[1] === needle) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}
// Write 3 Solutions

//=======================================================================

//Assignment 6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(
  allArrs.concat(arr2[2], arr1[2], arr2[3]).join("").toLocaleLowerCase()
); // fxy
