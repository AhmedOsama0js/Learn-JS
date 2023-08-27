//https://www.codewars.com/kata/520b9d2ad5c005041100000f (link)


/*

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/




const pigIt = (str) =>
  str
    .split(" ")
    .map((e) => {
      let st = `${e.split("").slice(1).join("")}${e[0]}`;
      return /[^a-zA-Z]/g.test(e) ? e : `${st}ay`;
    })
    .join(" ");