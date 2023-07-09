//https://elzero.org/word-before-last-length-challenge/(link)

/*


Count the number of letters used in the previous word
You have a function named wordBeforeLastLength that accepts a string parameter
Last
If there is only one letter it is not considered a word. The word starts with two letters or more
Return the false value
If the sentence contains two words


*/

function wordBeforeLastLength(sentence) {
  const words = sentence.match(/\b\w+\b/g).filter((e) => e.length > 2);
  return words.length < 2
    ? false
    : words.length == 2
    ? words[words.length - 2]
    : words[words.length - 2].length;
}

console.log(wordBeforeLastLength("Elzero Web School")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero Web School    A ")); // Web => 3
console.log(wordBeforeLastLength("Hello Elzero    Web   School  ")); // Web => 3
console.log(wordBeforeLastLength("Hello")); // False
console.log(wordBeforeLastLength("Hello Elzero")); // Hello
console.log(wordBeforeLastLength("Hello Elzero    A")); // Hello
