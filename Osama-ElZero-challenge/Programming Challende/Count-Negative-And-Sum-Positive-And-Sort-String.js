//https://elzero.org/programming-count-negatives-sum-positive-sort-string/ (link)

/*
Count the number of positive numbers, calculate the sum of negative numbers, and arrange the String elements
Requests
You have the following Array containing positive and negative numbers and Strings
What is required is to make a Function that accepts one Parameter from you, which is the Array
All you have to do is calculate how many negative numbers there are
Then the sum of the positive numbers
Then print the String together after sorting them alphabetically
Then it returns an Array containing all of the above as in the example
*/

let arr = [1, 10, 15, -2, -5, 0, "Z", "A", 8, -30, 5, "C"];

function getResult(arr) {
  let nArr = [];
  nArr.push(
    arr
      .filter((e) => (typeof e == "number") & (e > 0))
      .reduce((a, b) => a + b, 0)
  );
  nArr.push(arr.filter((e) => (typeof e == "number") & (e < 0)).length);
  nArr.push(
    arr
      .filter((e) => typeof e !== "number")
      .sort()
      .reduce((z, y) => z + y)
  );
  return nArr;
}

console.log(getResult(arr));

// Ouput
// [39, 3, "ACZ"];
