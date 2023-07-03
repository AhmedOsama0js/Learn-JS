// https://elzero.org/javascript-bootcamp-assignments-lesson-from-027-to-030/  (Link)

//assignment 1.

let userName = "Elzero";
console.log(userName.charAt(0).toLocaleLowerCase()); // e
console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
console.log(userName.substring(0, 1).toLocaleLowerCase()); // e
console.log(userName.slice(-6, -5).toLocaleLowerCase()); // eee
console.log(userName[0].toLocaleLowerCase().repeat(3)); // e

//====================================================================================

//assignment 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLocaleLowerCase())); // True
