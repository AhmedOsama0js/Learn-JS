//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/ (link)

/*


Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.


*/

const grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3],
];

const grid1 = [
  [3, 2],
  [1, 0],
];

//solution 1
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = grid[i].length - 1; j >= 0; j--) {
      if (grid[i][j] < 0) {
        count++;
      } else {
        break;
      }
    }
  }
  return count;
};

//Runtime 51 ms;

//solution 2
var countNegatives = function (grid) {
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    let left = 0;
    let right = grid[i].length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      grid[i][mid] < 0 ? (right = mid - 1) : (left = mid + 1);
    }
    count += grid[i].length - left;
  }
  return count;
};

//Runtime 64 ms;

console.log(countNegatives(grid));
console.log(countNegatives(grid1));
