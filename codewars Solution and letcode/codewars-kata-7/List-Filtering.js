//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript (*link)

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/


//================ 1 =============

// function filter_list(l) {
//   x = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] == "number") {
//       x.push(l[i]);
//     }
//   }
//   return x;
// }

//================ 2 =============

filter_list = (l) => l.filter((v) => typeof v == "number");

console.log(filter_list([1, "a", "b", 0, 15]));
