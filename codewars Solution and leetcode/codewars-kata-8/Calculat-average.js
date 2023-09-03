//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript (link)

/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// findAverage = (e) => {
//   let x = 0;
//   for (let i = 0; i < e.length; i++) {
//     x += e[i];
//   }
//   let f = x / e.length;
//   return f;
// };

findAverage = (e) => {
  if (e === null || e.length === 0) return 0;
  return e.reduce((acc, current) => acc + current, 0) / e.length;
};

console.log(findAverage(2, 4, 6, 8, 10, 0));
