//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/

function past(h, m, s) {
  let time = (h * 3600 + m * 60 + s) * 1000;
  return time;
}

console.log(past(0, 1, 1));
