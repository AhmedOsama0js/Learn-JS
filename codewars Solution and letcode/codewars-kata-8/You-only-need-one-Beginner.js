//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript (link)

/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

//============ 1 ===========
// function check(a, x) {
  //   for (let i = 0; i < a.length; i++){
//     if (a[i] === x) {
//     return true
//     } else {
//       return false
//     }
//   }
// }

//============ 2 ===========

let check = (a, x) => a.includes(x);

console.log(check(["what", "a", "great", "kata"], "kat"));
