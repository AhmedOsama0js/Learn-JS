//https://leetcode.com/problems/search-a-2d-matrix/description/ (link)

/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.


*/

var searchMatrix = function (matrix, target) {
  let end = true;
  matrix = matrix.join(",").split(",");
  for (let i = 1; i < matrix.length; i++) {
    if (+matrix[i] < +matrix[i - 1]) {
      end = false;
    }
  }
  if (matrix.indexOf(target.toString()) == -1) {
    end = false;
  }
  return end;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    11
  )
);
