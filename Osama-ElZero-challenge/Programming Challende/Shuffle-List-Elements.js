//https://elzero.org/shuffle-list-elements-challenge/ (link)

/*

Introduction to the challenge
Shuffle the elements of the array to make them appear randomly each time
Required
Create a function called shuffling that accepts one parameter, which is the Array
Shuffle the elements of the array
Print all items after you mix them
challenges
Do not use any ready-made Method Shuffle, do the process yourself

*/

// ===============  1  ========================

// function shuffling(nums) {
//   for (let i = nums.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [nums[i], nums[j]] = [nums[j], nums[i]];
//   }
//   return nums;
// }

//================== 2 ===========================

shuffling = (nums) => nums.sort(() => Math.random() - 0.5);

//Test Cases
console.log(shuffling([1, 2, 4, 10, 20, 12])); // [4, 20, 1, 12, 10, 2]
console.log(shuffling([1, 2, 4, 10, 20, 12])); // [4, 1, 10, 12, 20, 2]
console.log(shuffling([1, 2, 4, 10, 20, 12])); // [2, 4, 20, 12, 1, 10]
