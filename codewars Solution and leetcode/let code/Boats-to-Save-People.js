// https://leetcode.com/problems/boats-to-save-people/description/(link)

/*

Code
Testcase
Test Result
Test Result
881. Boats to Save People
Medium
Topics
Companies
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person

*/

let people1 = [1, 2],
  limit1 = 3; //1

let people2 = [3, 2, 2, 1],
  limit2 = 3; //3

let people3 = [3, 5, 3, 4],
  limit3 = 5; //4

let people4 = [3, 8, 7, 1, 4],
  limit4 = 9; // 4

// solution 1
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }

  return boats;
};

// Runtime: 126 ms
console.log(numRescueBoats(people1, limit1));
console.log(numRescueBoats(people2, limit2));
console.log(numRescueBoats(people3, limit3));
console.log(numRescueBoats(people4, limit4));
