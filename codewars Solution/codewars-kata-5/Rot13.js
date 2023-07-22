//https://www.codewars.com/kata/530e15517bc88ac656000716/ (link)




/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(str) {
  return str
    .split("")
    .map((char) => {
      const ascii = char.charCodeAt(0);
      if (ascii >= 65 && ascii <= 90) {
        return String.fromCharCode(((ascii - 65 + 13) % 26) + 65);
      } else if (ascii >= 97 && ascii <= 122) {
        return String.fromCharCode(((ascii - 97 + 13) % 26) + 97);
      } else {
        return char;
      }
    })
    .join("");
}

console.log(rot13("test"));
console.log(rot13("Test"));
console.log(rot13("Ruby is cool!"));