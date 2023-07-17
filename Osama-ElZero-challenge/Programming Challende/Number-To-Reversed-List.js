//https://elzero.org/number-to-reversed-list-challenge/ (link)

/*
Convert the number to an inverted list of numbers
Notes
Choose the language you want to do the challenge
The solution must be done in at least two ways in whatever programming language you choose
*/

//=================== 1 =======================

// const convert = (n) => `${n}`.split("").reverse()

//=================== 2 =======================

const convert = (n) => [...new Set(`${n}`)].reverse();

// Testing Ouput
console.log(convert(564987654)); // [4, 5, 6, 7, 8, 9, 4, 6, 5]
console.log(convert(529132)); // [2, 3, 1, 9, 2, 5]
