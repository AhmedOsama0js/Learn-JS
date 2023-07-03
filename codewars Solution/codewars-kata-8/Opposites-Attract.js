//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript (link)

/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

//===================== 1 ==================

// function lovefunc(flower1, flower2) {
//   if (
//     (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 === 0)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

//===================== 2 ==================

// lovefunc = (flower1, flower2) =>
//   (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//   (flower1 % 2 !== 0 && flower2 % 2 === 0)
//     ? true
//     : false;

//===================== 3 ==================

lovefunc = (f1, f2) => f1 % 2 != f2 % 2;

console.log(lovefunc(1, 2));
