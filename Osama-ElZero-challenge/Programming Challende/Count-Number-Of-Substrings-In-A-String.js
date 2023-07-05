// https://elzero.org/count-substrings-inside-string-challenge/ (link)

/*
Calculate the number of Substrings required within a String
Required
Create a Function that accepts 2 Parameters, the first is Substring and the second is String
Calculate the number of Substrings required within a String
*/

//======================= 1 ===============

// function count_sub_strings(sub, string) {
//   count = 0
//   string = string.split("")
//   string.map((e) => (e.toLowerCase() === sub.toLowerCase() ? count++ : ""));
//   return count
// }

//======================= 2 ===============

function count_sub_strings(sub, string) {
  let count = 0;
  string = string.toLowerCase();
  sub = sub.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === sub) {
      count++;
    }
  }
  return count;
}

console.log(count_sub_strings("o", "I Love Elzero Web School")); // 4
console.log(count_sub_strings("a", "Iam Happy")); // 2
