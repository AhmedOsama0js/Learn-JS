// https://elzero.org/programming-add-commas-and-underscore/ (link)

//challenge
/*
Create a function named "add_commas_and_underscore" that accepts a single parameter, which is a number. If the number consists of 7, 8, or 9 digits, put an underscore after the third digit from the right and a comma after the sixth digit from the right. If the number consists of 4, 5, or 6 digits, put an underscore after the third digit from the right. If the number consists of 3 digits, do not add anything.
*/

add_commas_and_underscore = (num) => {
  let sum = num.toString().replace();
  if (sum.length <= 3) {
    sum = num.toString().replace();
  } else if (sum.length >= 4 && sum.length <= 6) {
    sum = `${sum.slice(0, 3)}_${sum.slice(3)}`;
  } else if (sum.length >= 6 && sum.length <= 9) {
    sum = `${sum.slice(0, 3)},${sum.slice(3, 6)}_${sum.slice(6)}`;
  } else {
    sum = `${num.toLocaleString().slice(0, sum.length)}_${sum.slice(-3)}`;
  }
  return sum;
};

// Testing Ouput
console.log(add_commas_and_underscore(120)); // 120
console.log(add_commas_and_underscore(1530)); // 1_530
console.log(add_commas_and_underscore(120510650)); // 120,510_650
console.log(add_commas_and_underscore(510650480910)); // 510,650,480_910
console.log(add_commas_and_underscore(12069057014032)); // 12,069,057,014_032
