// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/javascript (link)

/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
*/

squareOrSquareRoot = (array) => {
  let newArray = [];
  for (let i = 0; i, i < array.length; i++) {
    Number.isInteger(Math.sqrt(array[i]))
      ? newArray.push(Math.sqrt(array[i]))
      : newArray.push(array[i] * array[i]);
  }
  return newArray;
};

//=====================================================================
// const squareOrSquareRoot = (array) =>
//   array.map((x) => (Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : x * x));
//=====================================================================

console.log(squareOrSquareRoot([4, 3, 9, 7]));
