//https://www.codewars.com/kata/559590633066759614000063/ (link)

/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
*/

// ==========  1 ========

function minMax(arr) {
  arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length - 1]];
}

// ==========  2  ========

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([5]));
