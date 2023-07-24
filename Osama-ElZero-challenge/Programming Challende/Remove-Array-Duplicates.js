// https://elzero.org/remove-array-duplicates-challenge/ (link)

/*

Introduction to the challenge
Remove duplicate elements inside the Array
Required
Remove duplicate elements from the Array
Print all distinct numbers under each other
challenges
Don't use any ready-made Method nor datatype like Set which removes iterator and do the idea yourself

*/

let numbers = [1, 2, 2, 2, 4, 5, 7, 2, 2, 8, 9];

//======================= 1 ================

// function arr(n) {
//   n = [...new Set(n)]
//   for (let i = 0; i < n.length; i++) {
//     console.log(n[i])
//   }
// }

// arr(numbers)

//=======================2 ================

ARR = (num) => {
  let numbers = num.filter((item, index) => {
    return num.indexOf(item) === index;
  });
  numbers.forEach((item) => {
    console.log(item);
  });
};

ARR(numbers);
