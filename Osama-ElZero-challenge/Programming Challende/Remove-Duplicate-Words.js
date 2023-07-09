//https://elzero.org/programming-remove-duplicate-words/ (link)

/*

Remove duplicate words inside String
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Create a Function that accepts one Parameter from you, which is the String
Required to remove duplicate words from String

*/

//======================== 1 ===================

function remove_duplicate_words_from(sentence) {
  sentence = sentence.split(" ");
  const uniqueWords = sentence.filter((word, index) => {
    return sentence.indexOf(word) === index;
  });
  return uniqueWords.join(" ");
}

//======================== 2 ===================

// function remove_duplicate_words_from(sentence) {
//   const words = sentence.split(" ");
//   const uniqueWords = Array.from( new Set(words));
//   return uniqueWords.join(" ");
// }

// # Testing Ouput
console.log(remove_duplicate_words_from("Hello Elzero Web Web Hello School"));
// # Hello Elzero Web School
