//https://www.codewars.com/kata/57a429e253ba3381850000fb (link)

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//======================== solution 1 ==============

// function bmi(weight, height) {
//   let b = weight / height ** 2;
//   if (b <= 18.5) {
//     return "Underweight";
//   } else if (b <= 25.0) {
//     return "Normal";
//   } else if (b <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

//======================== solution 2 ==============

function bmi(weight, height) {
  let b = weight / height ** 2;
  return b <= 18.5
    ? "Underweight"
    : b <= 25.0
    ? "Normal"
    : b <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(80, 1.8));
