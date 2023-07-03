//https://www.codewars.com/kata/5547929140907378f9000039 (link)

/*

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata

*/

// Solution1

// function shortcut(str) {
//   let x = ["a", "e", "i", "o", "u"];
//   let newArr = str
//     .split("")
//     .filter(function (ele) {
//       return x.indexOf(ele.toLowerCase()) === -1;
//     })
//     .join("");
//   return newArr.toLowerCase();
// }

// Solution2

function shortcut(str) {
  let e = ["a", "e", "o", "u", "i"]
  for (let i = 0; i < str.split("").length; i++) {
    return str.replaceAll(str[e[i]],"");
  }
}

console.log(shortcut("agdfgbeeeeeefhnyeeeaaaaaaaeaaassdfgnbvsdeuoi"));
