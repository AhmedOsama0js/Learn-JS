//https://elzero.org/javascript-2021-higher-order-functions-challenge/  (link)

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .map(function (x) {
    return isNaN(parseInt(x)) ? x : "";
  })
  .filter(function (x) {
    return x === "," ? "" : x;
  })
  .map(function (x) {
    return x === "_" ? " " : x;
  })
  .reduce(function (x, y) {
    return x + y;
  })
  .slice(true, -true);

console.log(solution); // Elzero Web School
