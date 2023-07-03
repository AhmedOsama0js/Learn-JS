//https://elzero.org/javascript-bootcamp-assignments-lesson-from-010-to-017/ (link)

//=======================================================================

//Assignment 1

// Add Variables Here
let NumberOun = 10;
let NumberTwo = 20;

// Ouput
console.log(NumberOun + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOun + "" + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOun}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOun}${NumberTwo}`); // Template Literals Way => String

console.log(NumberTwo + "\n" + NumberOun);
/*
  Normal Concatenate
  20
  10
*/
console.log(`${NumberOun}
${NumberTwo}`);
/*
  Template Literals Way
  20
  10
*/

//=======================================================================

//assignment 2

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//=======================================================================

//assignment 3

console.log(`\`I\'m I\n\\\n
\\\\
Love \\\\ \"\"\" \'\'\'
\+\+ With \+\+
\\\"\"\"\\\"\"\"
\"\"JavaScript\"\"\``);

//=======================================================================

//assignment 4

let a = 21;
let b = 20;

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// _21_2021_2021_2021_20_
