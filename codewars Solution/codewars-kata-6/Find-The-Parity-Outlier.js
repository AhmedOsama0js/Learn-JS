//https://www.codewars.com/kata/5526fc09a1bbd946250002dc (link)

/*


You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

*/


function findOutlier(n) {
  let x = [];
  let y = [];
  n.filter((e) => (e % 2 ? x.push(e) : y.push(e)));
  return x.length < y.length ? +x : +y;
}