// https://elzero.org/find-longest-word-challenge/ (link)

/*
Find the largest word in the String in terms of the number of characters
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
Requests
Create a Function that accepts a Parameter, which is the String to find the largest word in
*/

// ==================== 1 ================

//const longest_word_in = (sentence) => sentence.split(" ").reduce((x,y) => x.length < y.length ? y : x)

// ==================== 2 ================

const longest_word_in = (sentence) => {
  sentence = sentence.split(" ").sort((a, b) => b.length - a.length);
  return sentence[0];
};

// Testing Ouput
console.log(
  longest_word_in("In Programming We Love Elzero Academy Tooooooooooo Much")
); // Tooooooooooo
