// https://elzero.org/first-letter-from-every-word-challenge/ (link)

/*
Take the first letter of each word and combine them into one word
Required
Create a Function that accepts a String from you
The String contains a noun that can be one, two, or three words
Bring the first letter of each word and then combine the three letters into one word
Make sure that the last combined word is all capital letters
If the String contains only one word, print the word as it is and do not remove the first letter of it
If the String contains more than three words, print a message stating that the name is uppercase

*/

function getFirstLetters(str) {
  str = str.split(" ");
  if (str.length === 1) {
    return str[0];
  } else if (str.length > 3) {
    return "The Word Is Big";
  } else {
    return str.map((e) => e.slice(0, 1).toUpperCase()).join("");
  }
}

// Other Tests
console.log(getFirstLetters("Osama")); // "Osama"
console.log(getFirstLetters("Osama Elzero")); // "OE"
console.log(getFirstLetters("Elzero Web School")); // "EWS"
console.log(getFirstLetters("I Love PHP And Python")); // "The Word Is Big"
