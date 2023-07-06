//https://elzero.org/create-array-from-range-challange/ (link)

/*

Create an Array of numbers from the Range given to you
Required
Create a Function that accepts two parameters, the first is the beginning of the Range and the second is the end of the Range
Create an Array of elements starting at the beginning of the Range and ending at the end of the Range
The beginning and end of the range must be inside the array
Exclude the number 8 from the result

*/

function createArray(s, e) {
  let arr = [];
  for (let i = s; i <= e; i++) {
    i !== 8 ? arr.push(i) : "";
  }
  return arr;
}

// createArray =(s, e)  => Array.from({ length: e - s + 1 }, (_, i) => s + i).filter(
//     (x) => x !== 8
//   );

// Input
console.log(createArray(5, 10));

// Output
// [5, 6, 7, 9, 10];
