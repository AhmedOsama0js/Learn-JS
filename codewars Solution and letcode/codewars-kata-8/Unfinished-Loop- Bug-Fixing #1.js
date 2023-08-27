//https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript (link)

/*
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter < number; ) {
    newArray.push(number);
  }
  return newArray;
}

*/

function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
}
console.log(createArray(10));
