//https://elzero.org/remove-char-from-string-challenge/ (link)

/*
Introduction to the challenge
Remove the required character from the String
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Create a function that accepts two parameters, the first is the String and the second is the character to be removed
Remove all characters from the String
The Character can be an uppercase letter, a lowercase letter, or a sign


*/

//=================   1  ========================

// function remove_char_from(string, char) {
//   var str = string.toLowerCase();
//   var chr = char.toLowerCase();
//   var regex = new RegExp(chr.toLowerCase(), "g");
//   return str.replace(regex, "");
// }

//=================   2  ========================

function remove_char_from(string, char) {
  return string
    .split(char.toUpperCase())
    .join("")
    .split(char.toLowerCase())
    .join("");
}

// Testing Ouput
console.log(remove_char_from("ElddzeroD WebDD ddSchool", "d")); //  Elzero Web School
console.log(remove_char_from("ElxzeroX Web Sxchool", "x")); // Elzero Web School
console.log(remove_char_from("Elzero@ Web@@ @@School", "@")); //  Elzero Web School
