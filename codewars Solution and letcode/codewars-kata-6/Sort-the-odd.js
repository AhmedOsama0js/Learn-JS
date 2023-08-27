//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d (link)




/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

*/



function sortOddNumbers(arr) {
  let odd = arr.filter((e) => e % 2).sort((a, b) => a - b);
  return arr.map((num) => {
    if (num % 2 !== 0) {
      return odd.shift();
    }
    return num;
  });
}

console.log(sortOddNumbers([7, 1])); //=>  [1, 7]
console.log(sortOddNumbers([5, 8, 6, 3, 4])); // =>  [3, 8, 6, 5, 4]
console.log(sortOddNumbers([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
