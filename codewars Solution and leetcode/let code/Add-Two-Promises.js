// https://leetcode.com/problems/add-two-promises/description/ (link)

/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
*/

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20)),
  promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));


  // solution 1
  var addTwoPromises = async function (promise1, promise2) {
    let a = await promise1.then((e) => e);
    let b = await promise2.then((e) => e);
    
    return (await a) + b;
  };
// Runtime 61 ms

  // solution 2
var addTwoPromises = async function (promise1, promise2) {
  let [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};
// Runtime 68 ms


  // solution 3
  var addTwoPromises = async  (promise1, promise2) => await promise1 + await promise2;
  
  // Runtime 64 ms

console.log(addTwoPromises(promise1, promise2));
